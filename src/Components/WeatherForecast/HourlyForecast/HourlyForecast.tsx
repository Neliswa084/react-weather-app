import { Text } from '../../Text/Text'
import styles from './HourlyForecast.module.css'
import { Card } from '../../Card/Card'
import { type HourlyForecastProps } from '../../../Components/Type/ForecastProps'

type HourlyProps = {
    data: HourlyForecastProps[]
}

export const HourlyForecast:React.FC<HourlyProps> = ({data}) => {
    return (
        <>
        <Card>
          <Text variant='h1'>Hourly Forecast</Text>
      <div className={styles['hourly-forecast-container']}>
        {data.map((hour) => (
          <div key={hour.time} className={styles['hourly-forecast-content']}>
            <Text variant='p'>{hour.time}</Text>
            <Text variant='p'>{hour.weatherCondition}</Text>
            <Text variant='h2'>{hour.temp}°C</Text>
          </div>
        ))}
      </div>
            </Card>
        </>
    )
}
