import React from 'react'
import styles from './Navbar.module.css'
import { Searchbar } from '../Search/Searchbar'
import { TempToggle } from '../TempToggle/TempToggle'

export const Navbar = () => {
  return (
   <nav>
     <Searchbar />
     <TempToggle />
   </nav>
  )
}
