import React from 'react'
import {Text} from '../../Components/Text/Text'
import styles from './CurrentWeather.module.css'
import {NavLink } from 'react-router-dom'
import backIcon from '../../assets/back.png'

import { type WeatherProps } from '../../Components/Type/WeatherProps'

type CurrentWeatherProps={
  weather: WeatherProps | null
 
}
export const CurrentWeather:React.FC<CurrentWeatherProps> = ({weather}) => {


  return (
    <>
      <NavLink to={'/'} className={styles.link} >
         <img className={styles['icon']} src={backIcon} alt="Back" />
         Back to Search</NavLink>
    <div className={styles['current-weather-container']}>
      <div className={styles['current-weather-details']}>
        <Text variant={'h2'}>{weather?.city}</Text>
        <Text variant={'p'}>{weather?.time}</Text>
        <Text variant={'h1'}>{weather?.temperature}°C</Text>
        <Text variant={'p'}>{weather?.weatherCondition}</Text>
        </div>
      <div className={styles['current-weather-icon']}>
        {/* <img className={styles['sun-icon']}src={sunIcon} alt="Weather Icon" /> */}
        <img className={styles['weather-icon']} src={weather?.weatherIcon} alt="Weather Icon" />
      </div>

    </div>
    </>
  )
}
 