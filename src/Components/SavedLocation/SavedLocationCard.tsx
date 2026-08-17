import React from 'react'
import { Card } from '../Card/Card'
import { Text } from '../Text/Text'
import styles from './SavedLocationCard.module.css'

type SavedLocationCardProps = {
  city: string
  onClick: () => void
  onDelete: () => void
}

export const SavedLocationCard:React.FC<SavedLocationCardProps> = ({ city, onClick, onDelete }) => {
  return (
    <div onClick={onClick} className={styles['card-wrapper']}>
      <Card>
        <div className={styles['card-content']}>
          <div>
            <Text variant='h2'>{city}</Text>
            <Text variant='p'>Tap to view weather</Text>
          </div>
          {/* Stop click from navigating when deleting */}
          <button
            onClick={(e) => { e.stopPropagation(); onDelete() }}
            className={styles['delete-btn']}
            aria-label={`Remove ${city}`}
          >
            ✕
          </button>
        </div>
      </Card>
    </div>
  )
}
