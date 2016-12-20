import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
	templateUrl: "../views/map.html",
  styleUrls: ['./map.css']
})
export class MapComponent {

	items: FirebaseListObservable<any[]>;
	businesses: FirebaseObjectObservable<any>;
	empresas = [];
  lng : number;
	lat : number;
	title :string;
  constructor(public af: AngularFire) {


		this.items = af.database.list('/businesses', {
		  query: {
		    orderByChild: 'title'
		  }
		});

		console.log(this.items);

		this.lat = -15.6008058;
		this.lng = -56.0977732;
		this.title = 'Cuiabá';
  }

	clickedMarker(label: string) {
    console.log('clicked the marker: '+ label)
  }


}
