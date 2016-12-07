import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import {Routes, RouterModule} from '@angular/router'


import {CategoriesComponent} from './categories/categories.component';
import {HomeComponent} from './home/home.component';
import {BusinessesComponent} from './businesses/businesses.component';

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
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, CategoriesComponent, HomeComponent, BusinessesComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
