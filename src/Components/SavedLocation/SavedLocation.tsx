import React from 'react'
import {Text} from '../../Components/Text/Text'

export type SavedLocationProps = {

    city: string ,
    temparature: string,
    weatherCondition: string,
   
}

export const SavedLocation:React.FC<SavedLocationProps> = ({city,temparature,weatherCondition}) => {
  return (
    <>
    <div>
        <Text variant={'h2'}>Durban</Text>
        <Text variant={'h3'}>27</Text>
        <Text variant={'h4'}>Sunny</Text>
    </div>
    
    
    </>
  )
}
