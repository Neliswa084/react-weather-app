import React from 'react'
import {Card} from '../../Components/Card/Card'
import {Text} from '../../Components/Text/Text'
import styles from './WeatherDetails.module.css'

export const WeatherDetails = () => {
  return (
    <>
    <div className={styles['weather-details-container']}>
    <Card>
    
    <Text variant={'h2'}>Humidity: 50%</Text>
     </Card>
      <Card>
        <Text variant={'h2'}>Wind Speed: 10 km/h</Text>  
      </Card>
       <Card>
        <Text variant={'h2'}>Temperature : 23°C</Text>
        
      </Card>
</div>
      </>
   
  )
}
