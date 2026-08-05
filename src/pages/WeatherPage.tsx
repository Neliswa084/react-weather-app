import React from 'react'
import { CurrentWeather } from '../Components/CurrentWeather/CurrentWeather'
import { Card } from '../Components/Card/Card'
import { WeatherDetails } from '../Components/WeatherDetails/WeatherDetails'

export const WeatherPage = () => {
  return (
    <>
    <CurrentWeather />
    <WeatherDetails />
    </>
  )
}
