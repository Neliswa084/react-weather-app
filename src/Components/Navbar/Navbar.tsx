import React from 'react'
import styles from './Navbar.module.css'
import { Searchbar } from '../Search/Searchbar'
import { TempToggle } from '../TempToggle/TempToggle'
import { DarkMode } from '../DarkModeToggle/DarkMode'

export type NavbarProps={
   
    units: string
    changeUnits: (newUnits: string) => void
    isChecked:boolean
    handleChange:() => void 

}

export const Navbar:React.FC<NavbarProps> = ({units, changeUnits,isChecked,handleChange}) => {
  return (
   <nav>
     <Searchbar />
     <TempToggle units={units} changeUnits={changeUnits} />
     <DarkMode isChecked={isChecked} handleChange={handleChange} />
   </nav>
  )
}
