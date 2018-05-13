import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopularSeriesComponent } from './home/popularseries/popularseries.component';
import { PopularMoviesComponent } from './home/popularmovies/popularmovies.component';
import { DetailMoviesComponent } from './detail/detailmovies/detailmovies.component';
import { DetailSeriesComponent } from './detail/detailseries/detailseries.component';
import { SearchComponent } from './search/search.component';
import { SearchMoviesComponent } from './search/searchmovies/searchmovies.component';

import { SeriesService } from './services/series.service';
import { MoviesService } from './services/movies.service';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    PopularSeriesComponent,
    PopularMoviesComponent,
    DetailMoviesComponent,
    DetailSeriesComponent,
    SearchComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent},
      { path: "detailmovie/:id", component: DetailMoviesComponent},
      { path: "detailserie/:id", component: DetailSeriesComponent},
      { path: "search/:search", component: SearchComponent},
      { path: "", redirectTo:"home", pathMatch: 'full'}
    ], {useHash: true} )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    SeriesService,
    MoviesService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
