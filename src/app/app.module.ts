import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import {Routes, RouterModule} from '@angular/router'
import { AgmCoreModule } from 'angular2-google-maps/core';

import {CategoriesComponent} from './categories/categories.component';
import {HomeComponent} from './home/home.component';
import {BusinessesComponent} from './businesses/businesses.component';
import {MapComponent} from './map/map.component';
import {BusinessesDetailComponent} from './businessesDetail/businessesDetail.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyAsaC5bE4Bvhd52C8nKV1eIsS6A8WWUpNk',
  authDomain: 'cuiabanidade-2ca45.firebaseapp.com',
  databaseURL: 'https://cuiabanidade-2ca45.firebaseio.com',
  storageBucket: 'cuiabanidade-2ca45.appspot.com'
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'businesses/:categoryId', component: BusinessesComponent },
  { path: 'map', component: MapComponent },
  { path: 'businessesDetail/:businessesId', component: BusinessesDetailComponent },    
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSb0c3WltcBz4pEt2HZMMhWapGdxtwMVw'
    })
  ],
  declarations: [ AppComponent, CategoriesComponent, HomeComponent, BusinessesComponent, MapComponent, BusinessesDetailComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
