import React from 'react'
import { Card } from '../Card/Card'
import { Text } from '../Text/Text'

type SavedLocationCardProps = {
  city: string
  temperature: string
  condition: string
}

export const SavedLocationCard:React.FC<SavedLocationCardProps> = ({ city, temperature, condition }) => {
  return (
    
    <Card>
      <Text variant={'h2'}>{city}</Text>
      <Text variant={'h3'}>{temperature}</Text>
      <Text variant={'h4'}>{condition}</Text>
    </Card>
  )
}
