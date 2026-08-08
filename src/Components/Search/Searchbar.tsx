import styles from './Searchbar.module.css'
import { useNavigate } from 'react-router-dom'

export const Searchbar = () => {

  const navigate = useNavigate()
  const navigateToWeatherPage = () => {
    navigate('/weather')
  }
  return (
      <div className={styles['search-bar']}>
      <input 
        type='text' 
        placeholder='Search for a city' 
        className={styles['search-input']}
      
      />
       <button onClick={navigateToWeatherPage} className={styles['search-btn']}>Search</button>
    
    </div>
   
  )
}
