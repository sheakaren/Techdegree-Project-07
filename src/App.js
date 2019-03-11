import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Import Components
import apiKey from './config';
import Header from './Components/Header';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

// Create a variable to store the API key
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
    this.beerSearch();
    this.wineSearch();
    this.vodkaSearch();
  }

  mainSearch = ( query = 'bar' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          mainPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  beerSearch = (query = 'beer' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          beerPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  wineSearch = (query = 'wine' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          winePics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  vodkaSearch = (query = 'vodka' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          vodkaPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() {
    // console.log(this.state.mainPics);
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchBar searchPhoto={this.mainSearch}/>
          <Nav />
          <Switch>
            <Route exact path = '/' 
              render = { 
                () => (this.state.loading) 
                  ? <p> Loading...</p> 
                  : <SearchResults data={this.state.mainPics} />} />
            <Route exact path = '/beer'
              render = {
                () => (this.state.loading) 
                  ? <p> Loading...</p> 
                  : <SearchResults data={this.state.beerPics} />} /> 
              <Route exact path = '/wine'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <SearchResults data={this.state.winePics} />} />
              <Route exact path = '/vodka'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <SearchResults data={this.state.vodkaPics} />} />
              <Route exact path = '/search'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <SearchResults data={this.state.search} />} />
            </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
