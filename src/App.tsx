import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { SearchPage } from './pages/SearchPage'
import { WeatherPage } from './pages/WeatherPage'
import { NotFound } from './pages/NotFound'

function App() {

  const[units,setUnits]= useState("C°")
  const[isDark,setIsDark] = useState(false)



  return (
    <>
    <div className='App' data-theme={isDark ? "dark" : "light"} >
     {/* <Navbar 
     units={units} 
     changeUnits={(newUnits) => setUnits(newUnits)}
     isChecked={isDark}
     handleChange={() => setIsDark(!isDark)}
     /> */}
     <Routes>
      <Route path='/'  element={<SearchPage/>} />
      <Route path='/weather/:city' element ={<WeatherPage 
      units={units} changeUnits={(newUnits) => setUnits(newUnits)} 
       isChecked={isDark}
       handleChange={() => setIsDark(!isDark)}
       />} />
      <Route path='*' element={<NotFound/>}/>
     </Routes>

      
    </div>
   
    </>
  )
}

export default App
