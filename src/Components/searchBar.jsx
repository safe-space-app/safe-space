
// const apiCall = (city, state) => {
//     fetch(`https://api.yelp.com/v3/businesses/search?location=${city},${state}&term=lgbtq`, {
//         headers: {
//             'Authorization': 'Bearer H9XvL6dp0gjVn8NKCTG8d8041RWlw0EMX9bsX6dRptipWCpuzAaVTulqewlWlMvPfJG5LW28crhpWqDvc2v6dFaC0gY4U3iTFnaoWbovZJUMWian5ycQVCq941FwYnYx',
//         }
//     })
//     .then(data => data.json())
//     .then((data) => {
//         console.log('data: ', data)
//     })
//     .catch(error => console.log('error in search bar get request: ', error))
// }

const apiCall = (city, state) => {
    fetch('http://localhost:3000/getlocation', {
        method: 'POST', 
        body: JSON.stringify({city: city, state: state}), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then((data) => {
        console.log('data: ', data)
    })
    .catch(error => console.log('error in search bar get request: ', error))
}


const SearchBar = (props) => {
    const clickSearch = (event) => {
        let city = document.getElementById("city").value
        let state = document.getElementById("state").value
        apiCall(city, state)
    }
    return (
        <div>
            <label>Search by location: </label>
            <input className='currentWeather' id='city' type='text' placeholder='city' />
            <input className='currentWeather' id='state' type='text' placeholder='state'/>
            <button className="searchBtn" onClick={clickSearch}>Search</button>
        </div>
    )
}

export default SearchBar