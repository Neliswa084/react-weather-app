import React from 'react'
import {Text} from '../../Components/Text/Text'
import styles from './CurrentWeather.module.css'
import {NavLink ,useNavigate} from 'react-router-dom'
import backIcon from '../../assets/back.png'
import sunIcon from '../../assets/sun.png'

export const CurrentWeather = () => {
  return (
    <>
      <NavLink to={'/'} className={styles.link} >
         <img className={styles['icon']} src={backIcon} alt="Back" />
         Back to Search</NavLink>
    <div className={styles['current-weather-container']}>
      <div className={styles['current-weather-details']}>
        <Text variant={'h2'}>Pietermarizburg</Text>
        <Text variant={'p'}>Tuesday , 04 August</Text>
        <Text variant={'h1'}>25°C</Text>
        <Text variant={'p'}>Sunny</Text>
        </div>
      <div className={styles['current-weather-icon']}>
        <img className={styles['sun-icon']}src={sunIcon} alt="Weather Icon" />
      </div>

    </div>
    </>
  )
}
