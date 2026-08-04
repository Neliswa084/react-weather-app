import React from 'react'
import './TempToggle.module.css'
import styles from './TempToggle.module.css'

type TempToggleProps={
  units: string
  changeUnits: (newUnits: string) => void
}

export const TempToggle: React.FC<TempToggleProps> = ({ units,changeUnits }) => {
  return (
    <>
    <div className={styles['units-container']}>
    <button onClick={() => changeUnits("C°")}>C°</button>
    <button onClick={() => changeUnits("F°")}>F°</button>
    </div>
  
          
   </>
  )
}
