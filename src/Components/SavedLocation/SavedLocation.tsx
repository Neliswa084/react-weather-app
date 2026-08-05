import React from 'react'
import styles from './SavedLocation.module.css'
import { SavedLocationCard } from './SavedLocationCard'

export const SavedLocation = () => {
  return (
  <>
   <div className={styles['saved-container']}>
     <h3>📌 Saved Locations</h3>
    <div className={styles['cards-row']}>
    <SavedLocationCard city="Cape Town" temperature="18°" condition="Cloudy⛅" />
      <SavedLocationCard city="Durban" temperature="28°" condition="Sunny☀️" />
      <SavedLocationCard city="PMB" temperature="24°" condition="Sunny☀️" />
      </div>
</div>
  </>
  )
}
