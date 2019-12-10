import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {
  public items = [];
  constructor(
    public globals: Globals
  ) {
    
    }

  ngOnInit() {
    this.items = this.globals.watchlist;
    console.log(this.items)
  }

  removefromList(movie){
    console.log('starting delete method');
    for(var i = 0; i < this.globals.watchlist.length; i++) {
      if( this.globals.watchlist[i].id == movie.id) {
        this.globals.watchlist.splice(i, 1);
      }
    }
  }

}
