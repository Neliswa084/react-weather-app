import styles from './SavedLocation.module.css'
import { SavedLocationCard } from './SavedLocationCard'
import { useNavigate } from 'react-router'

export const SavedLocation = () => {
  const navigate = useNavigate ()
 const savedCities: string[] = JSON.parse(localStorage.getItem('savedCities') || '[]')


  return (
  <>
    <div className={styles['saved-container']}>
      <h3>📌 Saved Locations</h3>
      <div className={styles['cards-row']}>
        {savedCities.length === 0 ? (
          <p>No saved locations yet. Search for a city!</p>
        ) : (
          savedCities.map((city) => (
            <SavedLocationCard
              key={city}
              city={city}
              onClick={() => navigate(`/weather/${city}`)}
            />
          ))
        )}
      </div>
    </div>
  </>
  )
}
