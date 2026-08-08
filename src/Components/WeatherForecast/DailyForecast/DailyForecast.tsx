import { Text } from '../../Text/Text'
import { Card } from '../../Card/Card'
import styles from './DailyForecast.module.css'

export const DailyForecast = () => {
    return (

        <>
            <Card>
                <Text variant='h1'>Daily Forecast</Text>
                <div className={styles['daily-forecast-container']}>

                    <div className={styles['daily-forecast-content']}>
                    <Text variant='h2'> Mon 10</Text>
                    <Text variant='h2'> Tue 11</Text>
                    <Text variant='h2'> Wed 12</Text>
                  
                   
                      
                    </div>
                    <div className={styles['daily-forecast-content']}>
                    <Text variant='p'> Partialy Cloudy⛅</Text>
                     <Text variant='p'> Sunny ☀️</Text>
                         <Text variant='p'> Rainy 🌧️</Text>
                      
                   
                    </div>
                    <div className={styles['daily-forecast-content']}>
                         <Text variant='h2'> H : 28°</Text>
                         <Text variant='h2'> H : 30°</Text>
                      <Text variant='h2'> H : 21°</Text>
                   
                    </div>

                        <div className={styles['daily-forecast-content']}>
                             <Text variant='h2'> L : 12°</Text>
                                <Text variant='h2'> L : 19°</Text>
                              <Text variant='h2'> L : 15°</Text>
                        </div>

                </div>
            </Card>
        </>
    )
}
