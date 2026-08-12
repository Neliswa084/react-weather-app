
export type HourlyForecastProps = {
  time: string          
  temp: number
  weatherCondition: string
  weatherIcon: string
}

export type DailyForecastProps = {
  date: string           
  tempMax: number        
  tempMin: number        
  weatherCondition: string
  weatherIcon: string
}