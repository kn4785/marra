import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

// THIS IS FAVORITES

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
  
})
export class ListPage implements OnInit {
  public items = [];
  constructor(
    public globals: Globals
  ) {
    
    }

  ngOnInit() {
    this.items = this.globals.favorites;
    console.log(this.items)
  }


  removefromList(movie){
    console.log('starting delete method');
    for(var i = 0; i < this.globals.favorites.length; i++) {
      if( this.globals.favorites[i].id == movie.id) {
        this.globals.favorites.splice(i, 1);
      }
    }
  }
}
