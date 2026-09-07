import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { SearchPage } from './pages/SearchPage'
import { WeatherPage } from './pages/WeatherPage'
import { SettingsPage } from './pages/SettingsPage'
import { NotFound } from './pages/NotFound'
import { Navbar } from './Components/Navbar/Navbar'

function App() {

  const [units, setUnits] = useState(() => localStorage.getItem('units') || 'C°')
  const [isDark, setIsDark] = useState(() => localStorage.getItem('isDark') === 'true')

  return (
    <>
    <div className='App' data-theme={isDark ? "dark" : "light"} >
     <Navbar
     units={units}
     changeUnits={(newUnits) => { setUnits(newUnits); localStorage.setItem('units', newUnits) }}
     isChecked={isDark}
     handleChange={() => { setIsDark(!isDark); localStorage.setItem('isDark', String(!isDark)) }}
     />
     <Routes>
      <Route path='/'  element={<SearchPage/>} />
      <Route path='/weather/:city' element={<WeatherPage units={units} />} />
      <Route path='/settings' element={<SettingsPage units={units}
         changeUnits={(newUnits) => { setUnits(newUnits);
         localStorage.setItem('units', newUnits) }}
          isDark={isDark} handleChange={() => { setIsDark(!isDark); 
          localStorage.setItem('isDark', String(!isDark)) }} />} />
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
    </>
  )
}

export default App
