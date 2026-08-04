import React from 'react'
import {Text} from '../../Components/Text/Text'
import styles from './Searchbar.module.css'
// import searchIcon from '../../assets/searchIcon.png'

export const Searchbar = () => {
  return (
      <div className={styles['search-bar']}>
      <input 
        type='text' 
        placeholder='search by title, URL, description or tag' 
        className={styles['search-input']}
      
      />
       <Text variant={'span'} style={{color: 'rgb(20,20,20)', padding: 10, fontSize:30}}>Search</Text>
      {/* <img src={searchIcon} alt='search icon' className={styles['search-icon']} /> */}
    </div>
   
  )
}
