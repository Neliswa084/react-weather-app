import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'

function App() {

  const[units,setUnits]= useState("C°")

  return (
    <>
     <Navbar units={units}  changeUnits={(newUnits) => setUnits(newUnits)}/>
      
    
    </>
  )
}

export default App
