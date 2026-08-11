
import { SavedLocation } from '../Components/SavedLocation/SavedLocation'
import { SavedLocationCard } from '../Components/SavedLocation/SavedLocationCard'
import { Searchbar } from '../Components/Search/Searchbar'


export const SearchPage = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <h1> Check the Weather</h1>
        <p>Search for a city to get the current weather information</p>
        <Searchbar />
        <SavedLocation />
    </div>
  )
}
