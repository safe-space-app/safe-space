import fetch from 'node-fetch'

const locationController = {
  getLocation(req, res, next) {
    try {
      
      console.log('body: ', req.body)
      const city = req.body.city
      const state = req.body.state

      fetch(`https://api.yelp.com/v3/businesses/search?location=${city},${state}&term=lgbtq`, {
        headers: {
            'Authorization': 'Bearer H9XvL6dp0gjVn8NKCTG8d8041RWlw0EMX9bsX6dRptipWCpuzAaVTulqewlWlMvPfJG5LW28crhpWqDvc2v6dFaC0gY4U3iTFnaoWbovZJUMWian5ycQVCq941FwYnYx',
        }
      })
      .then(data => data.json())
      .then((data) => {
        console.log('data: ', data)
        res.locals.data = data
        return next()
      })
      .catch(error => console.log('error in search bar get request: ', error))
    }
    catch (error) {
      return next(error)
    }
  }
}

export default locationController