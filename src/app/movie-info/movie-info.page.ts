import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ListPage } from '../list/list.page';
import { Globals } from '../globals';
// import { ConsoleReporter } from 'jasmine';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.page.html',
  styleUrls: ['./movie-info.page.scss']
})

export class MovieInfoPage implements OnInit {
  movieId = null;
  movie:object = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public globals: Globals,
    private dialogs: Dialogs
      ) {
      }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    this.modalMovieInfo();
  }

  updateMovie(json){
    this.movie = json;
    console.log(this.movie);
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
              console.log(json);
              return json;
            //document.getElementById("info").innerHTML =  "City & State";
            });

  }

  /*popularMovies(){ 
    const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=';
    const KEY = 'a876ebf5d22c0c6724d30bfac73a198d';
    const LANG = '&language=en-US';
    const PAGE = '&page=1'; 

    const URL = BASE_URL + KEY + LANG + PAGE; 

    var parent = this;
    this.makeRequest(URL).then(function(json) {
      parent.updateMovies(json);
    });

  } */

  modalMovieInfo(){

    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const KEY = '&api_key=a876ebf5d22c0c6724d30bfac73a198d';
    const LANG = '?language=en-US';

    const URL = BASE_URL + this.movieId + LANG + KEY; 

    var parent = this;
    this.makeRequest(URL).then(function(json) {
      parent.updateMovie(json);
    });
  }


  addtoList(listname, movie){
    if(listname == "favorites") {
      this.globals.favorites.push(movie)
    } else if (listname == "watchlist") {
      this.globals.watchlist.push(movie)
    } else if (listname == "watched") {
      this.globals.watched.push(movie)
    }
    this.dialogs.alert('Added movie to ' + listname.charAt(0).toUpperCase() + listname.substring(1))
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }

  

}
