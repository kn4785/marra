import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.page.html',
  styleUrls: ['./watched.page.scss'],
})
export class WatchedPage implements OnInit {
  public items = [];
  constructor(
    public globals: Globals
  ) {
    
    }

  ngOnInit() {
    this.items = this.globals.watched;
    console.log(this.items)
  }

  removefromList(movie){
    console.log('starting delete method');
    for(var i = 0; i < this.globals.watched.length; i++) {
      if( this.globals.watched[i].id == movie.id) {
        this.globals.watched.splice(i, 1);
      }
    }
  }
  
}
