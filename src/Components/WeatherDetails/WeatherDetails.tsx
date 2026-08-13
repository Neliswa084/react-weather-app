import React from 'react'
import {Card} from '../../Components/Card/Card'
import {Text} from '../../Components/Text/Text'
import styles from './WeatherDetails.module.css'
import {type WeatherProps} from '../Type/WeatherProps'

type WeatherDetailsProps = {
  weather: WeatherProps | null
  units:string

}

export const WeatherDetails:React.FC<WeatherDetailsProps> = ({weather, units}) => {
    if(!weather) return null

    const temp = units === "C°" ? weather.temperature
  : (weather.temperature * 1.8) + 32;

  return (
    <>
        <Card >
     <div className={styles['weather-details-container']}>
      <div className={styles['card']}>
       <Text variant={'h2'}>Humidity : {weather.humidity}</Text>
       </div>
       <div  className={styles['card']}>
     <Text variant={'h2'}>Wind Speed: {weather.windSpeed}</Text>  
     </div>
     <div className={styles['card']}>
      <Text variant={'h2'}>Temperature : {temp}</Text>
      </div>
      </div>
        </Card>
      </>
   
  )
}
