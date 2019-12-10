import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  //routing for list tabs (favorites which is list, watchlist, watched)
  {
    path: 'list/list',
    redirectTo: 'list'
  },
  {
    path: 'list/watchlist',
    redirectTo: 'watchlist'
  },
  {
    path: 'list/watched',
    redirectTo: 'watched'
  },
  {
    path: 'watched/list',
    redirectTo: 'list'
  },
  {
    path: 'watched/watchlist',
    redirectTo: 'watchlist'
  },
  {
    path: 'watched/watched',
    redirectTo: 'watched'
  },
  {
    path: 'watchlist/list',
    redirectTo: 'list'
  },
  {
    path: 'watchlist/watchlist',
    redirectTo: 'watchlist'
  },
  {
    path: 'watchlist/watched',
    redirectTo: 'watched'
  },
  //end of routing for list tabs

  //start of routing for movies tabs
  {
    path: 'home/home',
    redirectTo: 'home'
  },
  {
    path: 'home/upcoming',
    redirectTo: 'upcoming'
  },
  {
    path: 'home/toprated',
    redirectTo: 'toprated'
  },
  {
    path: 'toprated/toprated',
    redirectTo: 'toprated'
  },
  {
    path: 'toprated/home',
    redirectTo: 'home'
  },
  {
    path: 'toprated/upcoming',
    redirectTo: 'upcoming'
  },
  {
    path: 'upcoming/upcoming',
    redirectTo: 'upcoming'
  },
  {
    path: 'upcoming/home',
    redirectTo: 'home'
  },
  {
    path: 'upcoming/toprated',
    redirectTo: 'toprated'
  },
//end of routing for movies tabs

  {
    path: 'movie-info',
    loadChildren: () => import('./movie-info/movie-info.module').then( m => m.MovieInfoPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'watchlist',
    loadChildren: () => import('./watchlist/watchlist.module').then( m => m.WatchlistPageModule)
  },
  {
    path: 'watched',
    loadChildren: () => import('./watched/watched.module').then( m => m.WatchedPageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  },
  {
    path: 'toprated',
    loadChildren: () => import('./toprated/toprated.module').then( m => m.TopratedPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
