import React from 'react'
import styles from './HourlyForecast.module.css'
import { Card } from '../../Card/Card'
import { Text } from '../../Text/Text'
import { type HourlyForecastProps } from '../../Type/ForecastProps'

type HourlyProps = {
  data: HourlyForecastProps[]
}

const getEmoji = (icon: string) => {
  const map: Record<string, string> = {
    'clear-day': '☀️', 'clear-night': '🌙',
    'partly-cloudy-day': '⛅', 'partly-cloudy-night': '🌙',
    'cloudy': '☁️', 'rain': '🌧️',
    'showers-day': '🌦️', 'showers-night': '🌧️',
    'thunder-rain': '⛈️', 'snow': '🌨️',
    'fog': '🌫️', 'wind': '💨',
  }
  return map[icon] || '🌤️'
}

const formatTime = (timeStr: string) => {
  const h = parseInt(timeStr.split(':')[0])
  if (h === 0) return '12 AM'
  if (h < 12) return `${h} AM`
  if (h === 12) return '12 PM'
  return `${h - 12} PM`
}

export const HourlyForecast: React.FC<HourlyProps> = ({ data }) => {
  return (
    <Card>
      <Text variant='h1'>Hourly Forecast</Text>
      <div className={styles['hourly-list']}>
        {data.map((hour) => (
          <div key={hour.time} className={styles['hourly-item']}>
            <span className={styles.time}>{formatTime(hour.time)}</span>
            <span className={styles.icon}>{getEmoji(hour.weatherIcon)}</span>
            <span className={styles.temp}>{hour.temp}°C</span>
          </div>
        ))}
      </div>
    </Card>
  )
}