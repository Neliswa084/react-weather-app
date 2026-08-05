import {useState} from 'react'
import { CurrentWeather } from '../Components/CurrentWeather/CurrentWeather'
import { Card } from '../Components/Card/Card'
import { WeatherDetails } from '../Components/WeatherDetails/WeatherDetails'
import { ForecastTab } from '../Components/WeatherForecast/ForecastTabs/ForecastTab'
import { HourlyForecast } from '../Components/WeatherForecast/HourlyForecast/HourlyForecast'
import { DailyForecast } from '../Components/WeatherForecast/DailyForecast/DailyForecast'
import { SavedLocationCard } from '../Components/SavedLocation/SavedLocationCard'
import { SavedLocation } from '../Components/SavedLocation/SavedLocation'
import {type WeatherProps} from '../Components/Type/WeatherProps'

export const WeatherPage = () => {
  
  const[activeTab, setActiveTab] = useState("hourly")

  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)



  return (
    <>
    <CurrentWeather/>
    <WeatherDetails />
    <ForecastTab activeTab={activeTab} onTabChange={setActiveTab}/>
    {activeTab ==='hourly' && <HourlyForecast/>}
    {activeTab ==='daily' && <DailyForecast/>}
    <SavedLocation />
    
    </>
  )
}
