import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import '../Stylesheets/Feed.scss'

const BusinessCard = (props) => {
  console.log('props: ', props)

// TODO: adjust default thumb counts to pull from db

console.log('business cadr up:', props.thumbsUpCount)
console.log('business cadr down:', props.thumbsDownCount)
const [countUp, setCountUp] = useState(0);
const [countDown, setCountDown] = useState(0)

//onclick for thumbs will be fetch request to save location to db - send restaurant id
//onclick for favorite will be fetch request to save favorites to user profile - send restaurant id

// data sent to fetch request: {locationID: string, action: ('upvote' || 'downvote')}


  const vote = (locationId, action) => {
    if(action === 'upvote') setCountUp(countUp + 1)
    else setCountDown(countDown + 1)

    fetch("http://localhost:3000/vote", {
      method: "POST",
      body: JSON.stringify({locationId, action}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data)
      })
      .catch((err) => {
        console.log("were getting an error", err);
        alert('Error voting');
      });
  }

  const addFavorite = (username, locationId) => {
    console.log('username: ', username)
    console.log('locationId: ', locationId)
    fetch("http://localhost:3000/addFavorite", {
      method: "POST",
      body: JSON.stringify({'username': username, 'locationId': locationId}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      console.log(response.status)
    })
    .catch((err) => {
      console.log("were getting an error", err);
      alert('Error adding favorite');
    });
  }


  return(
    <div className="BusinessCard">
      <h4>{props.name}</h4>
      <div className="ImageContainer">
      <img src={props.image} alt="Business" height="190vh" width="310vw"/>
      </div>

      <h6>{props.address1}</h6>
      <h6>{props.city}, {props.state} {props.zipcode}</h6>
      {/* <Button onClick={() => {vote(props.id, 'upvote')}}><ThumbUpIcon/>{`${countUp === undefined ? " " : countUp}`}</Button>
      <Button onClick={() => {vote(props.id, 'downvote')}}><ThumbDownIcon/>{`${countDown === undefined ? " " : countDown}`}</Button> */}
      <Button onClick={() => {setCountUp(countUp+1)}}><ThumbUpIcon/>{`${countUp === 0 ? " " : countUp}`}</Button>
      <Button onClick={() => {setCountDown(countDown+1)}}><ThumbDownIcon/>{`${countDown === 0 ? " " : countDown}`}</Button>

      <Button onClick={() => addFavorite(props.user.username, props.id)}>Add to Favorites</Button>
      
    </div>
  )
}

export default BusinessCard;