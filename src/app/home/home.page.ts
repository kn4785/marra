import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
//class popularMovies in constructor to run right away on app open 
export class HomePage {
  constructor(public nav: NavController) {
    this.popularMovies();
  }

  movies = [];

  updateMovies(json){
    this.movies = json;
    console.log(this.movies);
  }

  makeRequest(url){ 
    const BROWSER = 'browser';
         return fetch(url)
            .then(function(response) {
               // Get the response string and return it as a string
            return response.text();
            }).then(function(body) {
               // Parse the string into json object
               return JSON.parse(body);
            }).then(function(json) {
            // Console log the json object
              return json;
            });

  }

  //building API call to get popular movies out now
  popularMovies(){ 
    const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=';
    const KEY = 'a876ebf5d22c0c6724d30bfac73a198d';
    const LANG = '&language=en-US';
    const PAGE = '&page=1'; 

    const URL = BASE_URL + KEY + LANG + PAGE; 

    var parent = this;
    this.makeRequest(URL).then(function(json) {
      parent.updateMovies(json);
    });

  }
}
