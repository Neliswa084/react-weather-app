import React from 'react'
import styles from './DailyForecast.module.css'
import { Card } from '../../Card/Card'
import { Text } from '../../Text/Text'
import { type DailyForecastProps } from '../../Type/ForecastProps'

type DailyProps = {
  data: DailyForecastProps[]
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

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + 'T00:00:00')
  return {
    day: date.toLocaleDateString('en-US', { weekday: 'short' }),
    date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  }
}

export const DailyForecast: React.FC<DailyProps> = ({ data }) => {
  return (
    <Card>
      <Text variant='h1'>Daily Forecast</Text>
      <div className={styles['daily-list']}>
        {data.map((day) => {
          const { day: dayName, date } = formatDate(day.date)
          return (
            <div key={day.date} className={styles['daily-item']}>
              <div className={styles.day}>
                {dayName} <span>{date}</span>
              </div>
              <span className={styles.icon}>{getEmoji(day.weatherIcon)}</span>
              <span className={styles.condition}>{day.weatherCondition}</span>
              <div className={styles.highAndLow}>
                <span className={styles.high}>H: {day.tempMax}°</span>
                <span className={styles.low}>L: {day.tempMin}°</span>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}