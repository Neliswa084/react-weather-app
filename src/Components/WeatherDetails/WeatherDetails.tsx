import React from 'react'
import {Card} from '../../Components/Card/Card'
import {Text} from '../../Components/Text/Text'
import styles from './WeatherDetails.module.css'
import {type WeatherProps} from '../Type/WeatherProps'

type WeatherDetailsProps = {
  weather: WeatherProps | null
  units: string
}

export const WeatherDetails:React.FC<WeatherDetailsProps> = ({weather, units}) => {
  if(!weather) return null

  // Convert feels-like temperature based on selected unit
  const feelsLike = units === 'C°'
    ? Math.round(weather.feelsLike)
    : Math.round((weather.feelsLike * 1.8) + 32)

  const unitSymbol = units === 'F°' ? '°F' : '°C'

  return (
    <>
      <Card>
        <div className={styles['weather-details-container']}>
          <div className={styles['detail-card']}>
            <Text variant={'p'}>💧 Humidity</Text>
            <Text variant={'h2'}>{weather.humidity}%</Text>
          </div>
          <div className={styles['detail-card']}>
            <Text variant={'p'}>💨 Wind Speed</Text>
            <Text variant={'h2'}>{Math.round(weather.windSpeed)} m/s</Text>
          </div>
          <div className={styles['detail-card']}>
            <Text variant={'p'}>🌡️ Feels Like</Text>
            <Text variant={'h2'}>{feelsLike}{unitSymbol}</Text>
          </div>
        </div>
      </Card>
    </>
  )
}
