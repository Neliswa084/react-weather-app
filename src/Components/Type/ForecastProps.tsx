// for each hour in HourlyForecast
export type HourlyForecastProps = {
  time: string          
  temp: number
  weatherCondition: string
  weatherIcon: string
}

// for each day in DailyForecast
export type DailyForecastProps = {
  date: string           
  tempMax: number        
  tempMin: number        
  weatherCondition: string
  weatherIcon: string
}