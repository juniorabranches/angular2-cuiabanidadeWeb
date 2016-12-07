import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Routes, RouterModule} from '@angular/router'


@Component({
	templateUrl: "../views/categories.html"
})
export class CategoriesComponent {

	items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.items = af.database.list('/categories');
		console.log(this.items);
  }


}
