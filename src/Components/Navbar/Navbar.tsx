import React from 'react'
import styles from './Navbar.module.css'
import { Text } from '../Text/Text'
import { TempToggle } from '../TempToggle/TempToggle'
import { DarkMode } from '../DarkModeToggle/DarkMode'
import weatherIcon from '../../assets/weather.png'

export type NavbarProps={
   
    units: string
    changeUnits: (newUnits: string) => void
    isChecked:boolean
    handleChange:() => void 

}

export const Navbar:React.FC<NavbarProps> = ({units, changeUnits,isChecked,handleChange}) => {
  return (
   <nav className={styles.navbar}>
     <div className={styles.logo}>
       <img src={weatherIcon} alt="Weather Icon" width={30} height={30} />
     <Text variant='h1'>Weather App</Text>
     </div>
     
     <TempToggle units={units} changeUnits={changeUnits} />
     <DarkMode isChecked={isChecked} handleChange={handleChange} />
   </nav>
  )
}
