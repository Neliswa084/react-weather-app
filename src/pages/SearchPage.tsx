import { useEffect } from 'react'
import { SavedLocation } from '../Components/SavedLocation/SavedLocation'
import { Searchbar } from '../Components/Search/Searchbar'
import { useNavigate } from 'react-router-dom'


export const SearchPage = () => {
    const navigate = useNavigate()

      useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        navigate(`/weather/${latitude},${longitude}`)
      },
      () => {
      
        console.log('Location permission denied')
      }
    )
  }, [])
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <h1> Check the Weather</h1>
        <p>Search for a city to get the current weather information</p>
        <Searchbar />
        <SavedLocation />
    </div>
  )
}
