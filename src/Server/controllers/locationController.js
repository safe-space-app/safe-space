import fetch from 'node-fetch'

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
      console.log('req body:', req.body);
      console.log('latitude:', latitude);
      console.log('longitude:', longitude)
      fetch(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=lgbtq`, {
        headers: {
          'Authorization': 'Bearer H9XvL6dp0gjVn8NKCTG8d8041RWlw0EMX9bsX6dRptipWCpuzAaVTulqewlWlMvPfJG5LW28crhpWqDvc2v6dFaC0gY4U3iTFnaoWbovZJUMWian5ycQVCq941FwYnYx',
        }
      })
      .then(data => data.json())
      .then((data) => {
        res.locals.data = {};
        res.locals.data.locations = data.businesses;
        return next();
      })
      .catch(error => console.log('error in search bar get request: ', error))

    }
    catch(err){
      return next(err)
    }
  }
}

export default locationController