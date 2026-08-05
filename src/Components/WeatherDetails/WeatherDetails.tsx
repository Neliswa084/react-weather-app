import React from 'react'
import {Card} from '../../Components/Card/Card'
import {Text} from '../../Components/Text/Text'
import styles from './WeatherDetails.module.css'

export const WeatherDetails = () => {
  return (
    <>
        <Card>
     <div className={styles['weather-details-container']}>
      <div className={styles['card']}>
       <Text variant={'h2'}>Humidity 50%</Text>
       </div>
       <div  className={styles['card']}>
     <Text variant={'h2'}>Wind Speed: 10 km/h</Text>  
     </div>
     <div className={styles['card']}>
      <Text variant={'h2'}>Temperature : 23°C</Text>
      </div>
      </div>


        </Card>
      </>
   
  )
}
