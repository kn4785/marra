import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  constructor() { }
  movies = [];

  //search for user inputed movie
  searchResults(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      //TODO: API Call Here
      console.log(val);

      //build api request using query
      const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
      const KEY = 'a876ebf5d22c0c6724d30bfac73a198d';
      const LANG = '&language=en-US';
      const PAGE = '&page=1'; 
      const QUERY = '&query=';
  
      const URL = BASE_URL + KEY + LANG + PAGE + QUERY + val; 

      var parent = this;
      this.makeRequest(URL).then(function(json) {
        parent.updateMovies(json);
      });

    }
  }

   //search for a random movie using a random generator api 
   searchRandomMovie(){
     var parent = this;
     //Required to deal with cors on localhost through proxy
    this.makeRequest("http://names.drycodes.com/10?nameOptions=objects&combine=1", 'https://cors-anywhere.herokuapp.com/').then((json) => {
      //Passing value into searching api
      parent.searchResults({'target': {'value': json[0]}})
    });
  }

    updateMovies(json){
      this.movies = json;
      console.log(this.movies);
    }
  
    makeRequest(url, proxyUrl = ''){ 
      const BROWSER = 'browser';
           return fetch(proxyUrl + url)
              .then(function(response) {
                 // Get the response string and return it as a string
              return response.text();
              }).then(function(body) {
                 // Parse the string into json object
                 return JSON.parse(body);
              }).then(function(json) {
                console.log(json);
                return json;
              });
  
    }
  
}
