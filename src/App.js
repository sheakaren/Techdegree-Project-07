import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
// import apiKey from './src/config.js';

// Import Components
import Header from './Components/Header';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import NoResults from './Components/NoResults';
// import Gallery from './Components/Gallery';


class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       pics: [],
//       loading: true
//     };
//   } 

// componentDidMount() {
//   fetch()
// }

  // performSearch = (query = 'code' ) => {
  //   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  //     .then(response => 
        
  //       // copied from gif-search workshop. needs change --->
  //       {
  //       this.setState({
  //         gifs: response.data.data,
  //         loading: false
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //   });
  // }




  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <SearchBar />
          <Nav />
                {/* display seach results here
                if no search results available, 
                display an error message */}
          <SearchResults />
          <NoResults />
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
