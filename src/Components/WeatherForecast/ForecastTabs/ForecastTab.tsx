import React from 'react'
import styles from '../ForecastTabs/ForecastTab.module.css'

type ForecastTabProps ={

    activeTab: string ,
    onTabChange:(tab:string) => void
}

export const ForecastTab:React.FC<ForecastTabProps> = ({activeTab,onTabChange}) => {
  return (
    <div className={styles['forecast-switch-tab']}>
        <button onClick={() => onTabChange('hourly')} className={activeTab === "hourly" ? styles.active:""}>Hourly</button>
        <button onClick={() => onTabChange('daily')}  className={activeTab === "daily" ? styles.active:" "}>Daily</button>
    </div>
  )
}
