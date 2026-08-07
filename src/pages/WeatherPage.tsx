import {useState , useEffect} from 'react'
import { CurrentWeather } from '../Components/CurrentWeather/CurrentWeather'
import { Card } from '../Components/Card/Card'
import { WeatherDetails } from '../Components/WeatherDetails/WeatherDetails'
import { ForecastTab } from '../Components/WeatherForecast/ForecastTabs/ForecastTab'
import { HourlyForecast } from '../Components/WeatherForecast/HourlyForecast/HourlyForecast'
import { DailyForecast } from '../Components/WeatherForecast/DailyForecast/DailyForecast'
import { SavedLocationCard } from '../Components/SavedLocation/SavedLocationCard'
import { SavedLocation } from '../Components/SavedLocation/SavedLocation'
import {type WeatherProps} from '../Components/Type/WeatherProps'
import {type ForecastProps} from '../Components/Type/ForecastProps'

export const WeatherPage = () => {
  
  const[activeTab, setActiveTab] = useState("hourly")

  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [forecast,setForecast] = useState<ForecastProps | null>(null)
  


useEffect(() => {
  const fecthWeatherData = async () => {
    try {
      const response = await fetch(`https://api.weatherstack.com/current?access_key=${import.meta.env.VITE_WEATHER_API_KEY}&query=Pietermaritzburg`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather');
      }
      const data = await response.json();
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
      console.log('Weather data fetched:', data);

  setWeatherData({
  city: data.location.name,
  time: data.location.localtime,
  temperature: data.current.temperature,
  humidity: data.current.humidity,
  windSpeed: data.current.wind_speed,
  feelsLike: data.current.feelslike,
  weatherCondition: data.current.weather_descriptions[0],
  weatherIcon: data.current.weather_icons[0]
   })
   console.log('Weather data saved:', weatherData)
       
      }
      catch (error) {
        setError('Failed to fetch weather');
    }
      finally {
        setLoading(false);
  }
};
fecthWeatherData();
}, []);
  

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
    {activeTab ==='hourly' && <HourlyForecast/>}
    {activeTab ==='daily' && <DailyForecast/>}
    <SavedLocation />

    </>
  )
}
