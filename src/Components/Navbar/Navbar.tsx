import React from 'react'
import styles from './Navbar.module.css'
import { Searchbar } from '../Search/Searchbar'
import { TempToggle } from '../TempToggle/TempToggle'

export type NavbarProps={
   
    units: string
    changeUnits: (newUnits: string) => void

}

export const Navbar:React.FC<NavbarProps> = ({units, changeUnits}) => {
  return (
   <nav>
     <Searchbar />
     <TempToggle units={units} changeUnits={changeUnits} />
   </nav>
  )
}
