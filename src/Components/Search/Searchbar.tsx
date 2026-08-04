import React from 'react'
import {Text} from '../../Components/Text/Text'
import styles from './Searchbar.module.css'
// import searchIcon from '../../assets/searchIcon.png'

export const Searchbar = () => {
  return (
      <div className={styles['search-bar']}>
      <input 
        type='text' 
        placeholder='Search for a city' 
        className={styles['search-input']}
      
      />
       <button className={styles['search-btn']}>Search</button>
    
    </div>
   
  )
}
