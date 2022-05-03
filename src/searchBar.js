
const apiCall = (city, state, country) => {
    fetch()
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
        let country = 'USA'
        apiCall(city, state, country)
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