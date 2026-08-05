import React from 'react'
import {Text} from '../../Components/Text/Text'
import styles from './CurrentWeather.module.css'
import {NavLink ,useNavigate} from 'react-router-dom'
import backIcon from '../../assets/back.png'

export const CurrentWeather = () => {
  return (
    <div>
         <NavLink to={'/'} className={styles.link} >
         <img className={styles['icon']} src={backIcon} alt="Back" />
         Back to Search</NavLink>
        <Text variant={'h2'}>Pitermarizburg</Text>
        <Text variant={'p'}>Tuesday , 04 August</Text>
        <Text variant={'h1'}>25°C</Text>
        <Text variant={'p'}>Partly Cloudy</Text>

    </div>
  )
}
 