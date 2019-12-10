import { Injectable } from '@angular/core';

/*global class to allow movie lists to be stores across screens*/
@Injectable()
export class Globals {
  public favorites = [];
  public watchlist= [];
  public watched = [];
}
