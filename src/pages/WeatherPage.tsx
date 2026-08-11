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
import { useParams } from 'react-router'

export const WeatherPage = () => {
  
  const[activeTab, setActiveTab] = useState("hourly")

  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
const [hourlyData, setHourlyData] = useState<HourlyForecastProps[]>([])
const [dailyData, setDailyData] = useState<DailyForecastProps[]>([])
  
 const { city } = useParams()

useEffect(() => {
  const fetchWeatherData = async () => {
    try {
      const [ weatherResponse,forecastResponse] = await Promise.all([
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`),
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${import.meta.env.VITE_FORECAST_API_KEY}&unitGroup=metric&include=hours,days`)
      ])
      // const data = await response.json();
       const data = await weatherResponse.json()
      const forecastJson = await forecastResponse.json()
      //  const data = {
      //   location: { name: 'Durban', localtime: '2026-08-05 21:00' },
      //   current: {
      //     temperature: 19,
      //     humidity: 63,
      //     wind_speed: 10,
      //     feelslike: 17,
      //     weather_descriptions: ['Clear'],
      //     weather_icons: ['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png']
      //   }
      // }
      // console.log('Weather data fetched:', data);

  // setWeatherData({
  // city: data.location.name,
  // time: data.location.localtime,
  // temperature: data.current.temperature,
  // humidity: data.current.humidity,
  // windSpeed: data.current.wind_speed,
  // feelsLike: data.current.feelslike,
  // weatherCondition: data.current.weather_descriptions[0],
  // weatherIcon: data.current.weather_icons[0]
  //  })
   setWeatherData({
  city: data.name,
  time: new Date(data.dt * 1000).toLocaleString(),
  temperature: data.main.temp,
  humidity: data.main.humidity,
  windSpeed: data.wind.speed,
  feelsLike: data.main.feels_like,
  weatherCondition: data.weather[0].description,
  weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
})
  setHourlyData(
        forecastJson.days[0].hours.map((hourly: any) => ({
          time: hourly.datetime,
          temp: hourly.temp,
          weatherCondition: hourly.conditions,
          weatherIcon: hourly.icon
        }))
      )

      setDailyData(
        forecastJson.days.slice(0, 7).map((daily: any) => ({
          date: daily.datetime,
          tempMax: daily.tempmax,
          tempMin: daily.tempmin,
          weatherCondition: daily.conditions,
          weatherIcon: daily.icon
        }))
      )

       
      }
      catch (error) {
        setError('Failed to fetch weather');
    }
      finally {
        setLoading(false);
  }
};
fetchWeatherData();
}, [city]);
  

if (loading) {
  return <div>Loading...</div>
}
if (error) {
  return <p>Error : {error}</p>
}
  
  return (
    <>
    <CurrentWeather weather={weatherData}/>
    <WeatherDetails weather={weatherData} />
    <ForecastTab activeTab={activeTab} onTabChange={setActiveTab}/>
    {activeTab ==='hourly' && <HourlyForecast data={hourlyData}/>}
    {activeTab ==='daily' && <DailyForecast data={dailyData}/>}
    <SavedLocation />

    </>
  )
}
