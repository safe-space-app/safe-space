import BusinessCard from '../Components/BusinessCard';
import '../Stylesheets/Feed.scss' 


const CardContainer = (props) => {
console.log('props.location in cardcontainer: ', props.location)
    const businesses = props.location.map(business => {
      return <BusinessCard 
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