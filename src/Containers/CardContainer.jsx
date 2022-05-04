import BusinessCard from '../Components/BusinessCard';
import {useState} from 'react'
import '../Stylesheets/Feed.scss' 


const CardContainer = (props) => {
    const businesses =  props.location.map ( (business) =>  {
      

      let upvotes, downvotes;
       fetch("http://localhost:3000/getVotes", {
        method: "POST",
        body: JSON.stringify({locationId: business.id}),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          }
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('data in cardcontainer: ', data)
          upvotes = data.upvotes;
          downvotes = data.downvotes;

        })
        .catch((err) => {
          console.log("were getting an error", err);
          alert('Error getting votes');
        })

          return <BusinessCard 
            thumbsUpCount={upvotes}
            thumbsDownCount={downvotes}
            id={business.id}
            name={business.name}
            address1={business.location.address1}
            address2={business.location.address2}
            city={business.location.city}
            state={business.location.state}
            zipcode={business.location.zip_code}
            image={business.image_url}
          />

    })
    
    return(
      <div>
          <h3 className="header"> Here are some safe spaces!</h3>
        { businesses }
      </div>
    )
}

export default CardContainer