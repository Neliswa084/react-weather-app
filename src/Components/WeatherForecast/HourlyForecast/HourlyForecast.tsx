import React from 'react'
import { Text } from '../../Text/Text'
import styles from './HourlyForecast.module.css'
import { Card } from '../../Card/Card'

export const HourlyForecast = () => {
    return (
        <>
        <Card>
            <Text variant='h1'>Hourly Forecast</Text>
            <div className={styles['hourly-forecast-container']}>
                <div className={styles['hourly-forecast-content']}>
                    <Text variant='p' >6 AM</Text>
                    💨
                    <Text variant='h2' >22°C </Text>
                </div>

                <div className={styles['hourly-forecast-content']}>
                    <Text variant='p' >9 AM</Text>
                    ⛅
                    <Text variant='h2' >23°C </Text>
                </div>
                <div className={styles['hourly-forecast-content']}>
                    <Text variant='p' >12 PM</Text>
                    ☀️
                    <Text variant='h2' >27°C </Text>
                </div>
                <div className={styles['hourly-forecast-content']}>
                    <Text variant='p' >3 PM</Text>
                    ☀️
                    <Text variant='h2' >28°C </Text>
                </div>
                <div className={styles['hourly-forecast-content']}>
                    <Text variant='p' >6 PM</Text>
                    🌥️
                    <Text variant='h2' >25°C </Text>
                </div>
            </div>
            </Card>
        </>
    )
}
