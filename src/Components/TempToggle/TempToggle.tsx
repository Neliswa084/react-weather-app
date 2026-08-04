import React from 'react'
import './TempToggle.module.css'

type TempToggleProps={
  units: string
  changeUnits: (newUnits: string) => void
}

export const TempToggle: React.FC<TempToggleProps> = ({ units,changeUnits }) => {
  return (
    <>
    
    <button onClick={() => changeUnits("C°")}>{units}</button>
    <button onClick={() => changeUnits("F°")}>{units}</button>
  
          
   </>
  )
}
