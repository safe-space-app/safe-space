// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
//import Button from "@mui/material/Button";
import React, { useState } from "react";

const BusinessCard = (props) => {
  console.log('props: ', props)
// star[favorite], thumbs up and down, 
// business image[stretch]

// TODO: adjust default thumb counts to pull from db
const [countUp, setCountUp] = useState(0);
const [countDown, setCountDown] = useState(0)

  return(
    <div>
      <h5>{props.name}</h5>
      <h6>{props.address1}</h6>
      <h6>{props.city}, {props.state} {props.zipcode}</h6>
  {/* <Button></Button> */}


      
    </div>
  )
}
{/* <Button onClick={() => setCountUp(countUp + 1)}><ThumbUpIcon/>{`${countUp === 0 ? " " : countUp}`}</Button>
      <Button onClick={() => setCountDown(countDown + 1)}><ThumbDownIcon/>{`${countDown === 0 ? " " : countDown}`}</Button> */}
export default BusinessCard;