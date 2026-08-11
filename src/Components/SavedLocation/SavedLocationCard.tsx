import React from 'react'
import { Card } from '../Card/Card'
import { Text } from '../Text/Text'

type SavedLocationCardProps = {
  city: string
   onClick: () => void
}
export const SavedLocationCard:React.FC<SavedLocationCardProps> = ({ city,onClick }) => {
  return (
    
     <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card>
        <Text variant='h2'>{city}</Text>
        <Text variant='p'>Tap to view weather</Text>
      </Card>
    </div>
  )
}
