import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import '../Stylesheets/Feed.scss'

const BusinessCard = (props) => {
  console.log('props: ', props)

// TODO: adjust default thumb counts to pull from db
const [countUp, setCountUp] = useState(0);
const [countDown, setCountDown] = useState(0)

//onclick for thumbs will be fetch request to save location to db - send restaurant id
//onclick for favorite will be fetch request to save favorites to user profile - send restaurant id



  return(
    <div className="BusinessCard">
      <h4>{props.name}</h4>
      <div className="ImageContainer">
      <img src={props.image} alt="Business" height="190vh" width="310vw"/>
      </div>

      <h6>{props.address1}</h6>
      <h6>{props.city}, {props.state} {props.zipcode}</h6>
      <Button onClick={() => setCountUp(countUp + 1)}><ThumbUpIcon/>{`${countUp === 0 ? " " : countUp}`}</Button>
      <Button onClick={() => setCountDown(countDown + 1)}><ThumbDownIcon/>{`${countDown === 0 ? " " : countDown}`}</Button>


      
    </div>
  )
}

export default BusinessCard;