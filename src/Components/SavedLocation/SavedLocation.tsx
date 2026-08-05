import React from 'react'
import {Text} from '../../Components/Text/Text'
import { Card } from '../Card/Card'

// export type SavedLocationProps = {

//     city: string ,
//     temparature: string,
//     weatherCondition: string,
   
// }

export const SavedLocation = () => {
  return (
    <>
    <Card>
        <div>
        <Text variant={'h2'}>CapeTown</Text>
        <Text variant={'h3'}>18°</Text>
        <Text variant={'h4'}>Cloudy⛅</Text>
</div>
    </Card>
    
       <Card>

        <Text variant={'h2'}>Durban</Text>
        <Text variant={'h3'}>28°</Text>
        <Text variant={'h4'}>Sunny</Text>

    </Card>
       <Card>

        <Text variant={'h2'}>PMB</Text>
        <Text variant={'h3'}>24°</Text>
        <Text variant={'h4'}>Sunny</Text>

    </Card>
    
    </>
  )
}
