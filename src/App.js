import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


// Import Components
import apiKey from './config';
import Header from './Components/Header';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

const api = apiKey;


class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.mainSearch();
    this.waffleSearch();
    this.ligerSearch();
    this.donkeySearch();
  }


  mainSearch = (query = 'piano' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          mainPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }
// I know I propbably should separate these into their own components, 
//   but I'm still getting used to handling this many files, 
//     so I'm going to make life easier on myself and keep them all in App.js
  waffleSearch = (query = 'waffle' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        
        {
        this.setState({
          wafflePics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  ligerSearch = (query = 'liger' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        
        {
        this.setState({
          ligerPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  donkeySearch = (query = 'donkey' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        
        {
        this.setState({
          donkeyPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }


  render() {
    console.log(this.state.mainPics);
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchBar onSearch={this.mainSearch}/>
          <Nav />
          <SearchResults />
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
