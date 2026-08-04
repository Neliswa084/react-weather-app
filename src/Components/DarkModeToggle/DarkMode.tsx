import React from 'react'
import styles from  './DarkMode.module.css'

import lightModeIcon from '../../assets/contrast.png'
import darkModeIcon from '../../assets/moon.png'

type DarkModeProps={
    handleChange: () => void;
    isChecked: boolean
}

export const DarkMode:React.FC<DarkModeProps> = ({handleChange, isChecked}) => {
  return (
      <button onClick={handleChange} className={styles['dark-btn']}>
        <img src={isChecked ? darkModeIcon : lightModeIcon} 
        alt="Dark Mode Toggle" 
        width={25} 
        height={25}/>
      </button>
  )
}
