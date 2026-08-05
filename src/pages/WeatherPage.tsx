import {useState} from 'react'
import { CurrentWeather } from '../Components/CurrentWeather/CurrentWeather'
import { Card } from '../Components/Card/Card'
import { WeatherDetails } from '../Components/WeatherDetails/WeatherDetails'
import { ForecastTab } from '../Components/WeatherForecast/ForecastTabs/ForecastTab'
import { HourlyForecast } from '../Components/WeatherForecast/HourlyForecast/HourlyForecast'
import { DailyForecast } from '../Components/WeatherForecast/DailyForecast/DailyForecast'

export const WeatherPage = () => {
  
  const[activeTab, setActiveTab] = useState("hourly")

  return (
    <>
    <CurrentWeather />
    <WeatherDetails />
    <ForecastTab activeTab={activeTab} onTabChange={setActiveTab}/>
    {activeTab ==='hourly' && <HourlyForecast/>}
    {activeTab ==='daily' && <DailyForecast/>}
    </>
  )
}
