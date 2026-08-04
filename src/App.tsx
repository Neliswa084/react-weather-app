import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'

function App() {

  const[units,setUnits]= useState("C°")
  const[isDark,setIsDark] = useState(false)


  return (
    <>
    <div className='App' data-theme={isDark ? "dark" : "light"} >
     <Navbar 
     units={units} 
     changeUnits={(newUnits) => setUnits(newUnits)}
     isChecked={isDark}
     handleChange={() => setIsDark(!isDark)}/>
      
    </div>
    </>
  )
}

export default App
