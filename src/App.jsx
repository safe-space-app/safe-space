import logo from './logo.svg';
import './Stylesheets/App.scss';
import './Stylesheets/Login.scss'
import SearchBar from './Components/searchBar';
import LoginSignupContainer from './Containers/LoginSignupContainer.jsx'

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <LoginSignupContainer/>
    </div>
  );
}

export default App;
