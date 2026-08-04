import React from 'react'
import styles from './Navbar.module.css'
import { Searchbar } from '../Search/Searchbar'
import { TempToggle } from '../TempToggle/TempToggle'

type NavbarProps={
    units: () => void

}

export const Navbar:React.FC<NavbarProps> = ({units}) => {
  return (
   <nav>
     <Searchbar />
     <TempToggle />
   </nav>
  )
}
