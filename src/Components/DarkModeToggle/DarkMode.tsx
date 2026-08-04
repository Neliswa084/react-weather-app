import React from 'react'
import styles from  './DarkMode.module.css'

type DarkModeProps={
    handleChange: () => void;
    isChecked: boolean
}

export const DarkMode:React.FC<DarkModeProps> = ({handleChange, isChecked}) => {
  return (
    <div className={styles['toggle-container']} >
        <input
        type="checkbox" 
        className= {styles['toggle']}
        id="check"
        onChange={handleChange}
        checked={isChecked}
        />
        <label htmlFor="check">Dark Mode</label>
    </div>
  )
}
