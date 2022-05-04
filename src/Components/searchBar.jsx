import '../Stylesheets/Feed.scss'

const SearchBar = (props) => {

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
            props.setLocation(data)
        })
        .catch(error => console.log('error in search bar get request: ', error))
    }

    const clickSearch = (event) => {
        let city = document.getElementById("city").value
        let state = document.getElementById("state").value
        apiCall(city, state)
    }

    return (
        <div>
            <label className="feedHeader">Search by location: </label><br></br>
            <input className='searchBar' id='city' type='text' placeholder='city' /><br></br>
            <input className='searchBar' id='state' type='text' placeholder='state'/><br></br>
            <button className="searchBtn" onClick={clickSearch}>Search</button>
        </div>
    )
}

export default SearchBar