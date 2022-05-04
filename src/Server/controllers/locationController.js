import fetch from 'node-fetch';
import Location from '../../database/models/locationModel.js';

const locationController = {
  changeLocations(req, res, next) {
    try {
      
      console.log('body: ', req.body)
      const {city, state} = req.body
      // const city = req.body.city
      // const state = req.body.state

      fetch(`https://api.yelp.com/v3/businesses/search?location=${city},${state}&term=lgbtq`, {
        headers: {
            'Authorization': 'Bearer H9XvL6dp0gjVn8NKCTG8d8041RWlw0EMX9bsX6dRptipWCpuzAaVTulqewlWlMvPfJG5LW28crhpWqDvc2v6dFaC0gY4U3iTFnaoWbovZJUMWian5ycQVCq941FwYnYx',
        }
      })
      .then(data => data.json())
      .then((data) => {
        console.log('changeLocations data: ', data)
        res.locals.data = data.businesses
        return next()
      })
      .catch(error => console.log('error in search bar get request: ', error))
    }
    catch (error) {
      return next(error)
    }
  },

  getLocations(req, res, next) {
    console.log('inside get locations')
    try{

      const {latitude, longitude} = req.body;
      // console.log('req body:', req.body);
      // console.log('latitude:', latitude);
      // console.log('longitude:', longitude)
      fetch(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=lgbtq`, {
        headers: {
          'Authorization': 'Bearer H9XvL6dp0gjVn8NKCTG8d8041RWlw0EMX9bsX6dRptipWCpuzAaVTulqewlWlMvPfJG5LW28crhpWqDvc2v6dFaC0gY4U3iTFnaoWbovZJUMWian5ycQVCq941FwYnYx',
        }
      })
      .then(data => data.json())
      .then((data) => {
        console.log('got locations')
        res.locals.data.locations = data.businesses;
        return next();
      })
      .catch(error => console.log('error in search bar get request: ', error))

    }
    catch(err){
      return next(err)
    }
  },

  voteLocation(req, res, next){
    try { 
      const { locationId, action } = req.body;
      //if req.body.action is upvote
      console.log(locationId)
      Location.findOne ({ locationId: locationId } , async (err, location) => {

        // if location doesnt not exist in database, insert
        if (!location) {
          console.log('did not find location');
          if(action === 'upvote'){
              await Location.create({
              locationId: locationId,
              upvotes: 1,
            })
          }
          else{
              await Location.create({
              locationId: locationId,
              downvotes: 1,
            })
          }
          return next();
        } 
        else if(location){
          if(action === 'upvote'){
            await Location.findOneAndUpdate({locationId: locationId}, {upvotes : location.upvotes + 1})
          } else {
            await Location.findOneAndUpdate({locationId: locationId}, {downvotes : location.downvotes + 1})
          }
          return next()
        }
        
        // if location exists in database increment data
        else { 
          console.log('voteLocations error')
          return next(err);
        }
      }); 
    } catch(err) { next(err) }
    
  },
  getVotes(req, res, next){
    try{

      const { locationId } = req.body;
      // make a database query using locationID and send back votes if it exists
      Location.findOne({locationId}, (notFound, location) => {
        res.locals.votes = {};
        if(location){

          res.locals.votes.upvotes = location.upvotes;
          res.locals.votes.downvotes = location.downvotes;
          console.log(`votes for ${locationId}: ${res.locals.votes}` )
          
        }
        next();
      })


    }
    catch(err) {
      next(err);
    }
  }
}

export default locationController