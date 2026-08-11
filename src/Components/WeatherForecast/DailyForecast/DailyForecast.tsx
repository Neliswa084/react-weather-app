import { Text } from '../../Text/Text'
import { Card } from '../../Card/Card'
import styles from './DailyForecast.module.css'
import { type DailyForecastProps } from '../../Type/ForecastProps'

type DailyProps={
    data: DailyForecastProps[]
}

export const DailyForecast:React.FC<DailyProps> = ({data}) => {
    return (

        <>
            <Card>
             <Text variant='h1'>Daily Forecast</Text>
      <div className={styles['daily-forecast-container']}>
        {data.map((day) => (
          <div key={day.date} className={styles['daily-forecast-content']}>
            <Text variant='h2'>{day.date}</Text>
            <Text variant='p'>{day.weatherCondition}</Text>
            <Text variant='h2'>H: {day.tempMax}°</Text>
            <Text variant='h2'>L: {day.tempMin}°</Text>
          </div>
        ))}
      </div>
            </Card>
        </>
    )
}
