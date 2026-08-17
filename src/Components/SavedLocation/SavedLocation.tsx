import { useState } from 'react'
import styles from './SavedLocation.module.css'
import { SavedLocationCard } from './SavedLocationCard'
import { useNavigate } from 'react-router-dom'

export const SavedLocation = () => {
  const navigate = useNavigate()

  // Use useState so the list updates immediately when a city is deleted
  const [savedCities, setSavedCities] = useState<string[]>(
    () => JSON.parse(localStorage.getItem('savedCities') || '[]')
  )

  const handleDelete = (cityToDelete: string) => {
    const updated = savedCities.filter(city => city !== cityToDelete)
    setSavedCities(updated)
    localStorage.setItem('savedCities', JSON.stringify(updated))
  }

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
                onDelete={() => handleDelete(city)}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}
