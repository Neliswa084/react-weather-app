import styles from './Searchbar.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Searchbar = () => {

  const [city, setCity] = useState('')

  const navigate = useNavigate()
  const navigateToWeatherPage = () => {
    if (city.trim() === '' ) return
navigate(`/weather/${city}`)
  }

  return (
      <div className={styles['search-bar']}>
      <input 
        type='text' 
        placeholder='Search for a city' 
        className={styles['search-input']}
        value={city}
        onChange={(e) => setCity(e.target.value)} 
      
      />
       <button onClick={navigateToWeatherPage} className={styles['search-btn']}>Search</button>
    
    </div>
   
  )
}
