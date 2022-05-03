import CardContainer from './CardContainer'
import SearchBar from '../Components/searchBar'
import {useState} from 'react'
import NavBar from '../Components/NavBar'

const FeedContainer = (props) => {
  const [location, setLocation] = useState([])
  return(
    <div>
      {/* <NavBar /> */}
      <SearchBar
        setLocation={setLocation}
      />
      <CardContainer
        location={location}
      />
    </div>
  )
}

export default FeedContainer