import {useState , useEffect} from 'react'
import { CurrentWeather } from '../Components/CurrentWeather/CurrentWeather'
import { WeatherDetails } from '../Components/WeatherDetails/WeatherDetails'
import { ForecastTab } from '../Components/WeatherForecast/ForecastTabs/ForecastTab'
import { HourlyForecast } from '../Components/WeatherForecast/HourlyForecast/HourlyForecast'
import { DailyForecast } from '../Components/WeatherForecast/DailyForecast/DailyForecast'
import { SavedLocation } from '../Components/SavedLocation/SavedLocation'
import {type WeatherProps} from '../Components/Type/WeatherProps'
import { type HourlyForecastProps } from '../Components/Type/ForecastProps'
import {type DailyForecastProps} from '../Components/Type/ForecastProps'
import { useParams } from 'react-router-dom'

type WeatherPageProps = {
  units: string
}

export const WeatherPage:React.FC<WeatherPageProps> = ({units}) => {

  const [activeTab, setActiveTab] = useState("hourly")
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hourlyData, setHourlyData] = useState<HourlyForecastProps[]>([])
  const [dailyData, setDailyData] = useState<DailyForecastProps[]>([])
  // Shows a banner when we are offline and showing cached data
  const [offlineNotice, setOfflineNotice] = useState<string | null>(null)

  const { city } = useParams()
  const isCoords = city?.includes(',')

  // Send a browser notification if severe weather is detected
  const checkWeatherAlert = (description: string, cityName: string, icon: string) => {
    const severeKeywords = ['storm', 'thunder', 'tornado', 'hurricane', 'severe', 'blizzard', 'extreme', 'hail']
    const isSevere = severeKeywords.some(keyword => description.toLowerCase().includes(keyword))

    if (isSevere && typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      new Notification('⚠️ Severe Weather Alert', {
        body: `${cityName}: ${description}`,
        icon: `https://openweathermap.org/img/wn/${icon}@2x.png`
      })
    }
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cacheKey = `weatherCache_${city}`

      try {
        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(isCoords
            ? `https://api.openweathermap.org/data/2.5/weather?lat=${city?.split(',')[0]}&lon=${city?.split(',')[1]}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
            : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
          ),
          fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${import.meta.env.VITE_FORECAST_API_KEY}&unitGroup=metric&include=hours,days`)
        ])

        const data = await weatherResponse.json()
        const forecastJson = await forecastResponse.json()

        const newWeatherData: WeatherProps = {
          city: data.name,
          time: new Date(data.dt * 1000).toLocaleString(),
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          feelsLike: data.main.feels_like,
          weatherCondition: data.weather[0].description,
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }

        const newHourlyData: HourlyForecastProps[] = forecastJson.days[0].hours.map((hourly: any) => ({
          time: hourly.datetime,
          temp: hourly.temp,
          weatherCondition: hourly.conditions,
          weatherIcon: hourly.icon
        }))

        const newDailyData: DailyForecastProps[] = forecastJson.days.slice(0, 7).map((daily: any) => ({
          date: daily.datetime,
          tempMax: daily.tempmax,
          tempMin: daily.tempmin,
          weatherCondition: daily.conditions,
          weatherIcon: daily.icon
        }))

        setWeatherData(newWeatherData)
        setHourlyData(newHourlyData)
        setDailyData(newDailyData)

        // Save to localStorage for offline access
        localStorage.setItem(cacheKey, JSON.stringify({
          weatherData: newWeatherData,
          hourlyData: newHourlyData,
          dailyData: newDailyData,
          timestamp: Date.now()
        }))

        // Auto-save city name to saved locations
        const savedCities: string[] = JSON.parse(localStorage.getItem('savedCities') || '[]')
        if (data.name && !savedCities.includes(data.name)) {
          savedCities.push(data.name)
          localStorage.setItem('savedCities', JSON.stringify(savedCities))
        }

        // Check for severe weather and send notification if permission granted
        checkWeatherAlert(data.weather[0].description, data.name, data.weather[0].icon)

      } catch (error) {
        // Fetch failed - try to load cached data for offline access
        const cached = localStorage.getItem(cacheKey)
        if (cached) {
          const parsedCache = JSON.parse(cached)
          setWeatherData(parsedCache.weatherData)
          setHourlyData(parsedCache.hourlyData)
          setDailyData(parsedCache.dailyData)
          setOfflineNotice('⚡ You are offline. Showing last saved weather data.')
        } else {
          setError('Failed to fetch weather. Check your internet connection and try again.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchWeatherData()
  }, [city])

  if (loading) {
    return <div>Detecting your location and fetching weather...</div>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <>
      {/* Offline banner - only shows when using cached data */}
      {offlineNotice && (
        <div style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '10px 24px', textAlign: 'center', fontWeight: 'bold' }}>
          {offlineNotice}
        </div>
      )}

      <CurrentWeather weather={weatherData} units={units} />
      <WeatherDetails weather={weatherData} units={units} />
      <ForecastTab activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'hourly' && <HourlyForecast data={hourlyData} units={units} />}
      {activeTab === 'daily' && <DailyForecast data={dailyData} units={units} />}
      <SavedLocation />
    </>
  )
}
