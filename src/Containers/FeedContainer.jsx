import CardContainer from './CardContainer'
import SearchBar from '../Components/searchBar'
import {useState} from 'react'
import NavBar from '../Components/NavBar'

const FeedContainer = (props) => {
  return(
    <div>
      {/* <NavBar /> */}
      <SearchBar
        setLocation={props.setLocation}
      />
      <CardContainer
        location={props.location}
      />
    </div>
  )
}

export default FeedContainer