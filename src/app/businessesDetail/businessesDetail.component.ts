import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import * as Firebase from 'firebase';
import { Observable } from 'rxjs/Rx';

@Component({
	templateUrl: "../views/businessesDetail.html",
  styleUrls: ['./businessesDetail.css']
})
export class BusinessesDetailComponent {

  businessSelecionado : any;
  businessDetails: FirebaseListObservable<any[]>;
	items: FirebaseListObservable<any[]>;

	lng : number;
	lat : number;

  constructor(public af: AngularFire,  private route: ActivatedRoute) {
		//console.log(this.route.params);
		this.businessSelecionado = this.route.params;

		this.businessDetails = af.database.list('/businesses', {
		  query: {
		    orderByChild: 'title'
		  }
		});

  }

	filter(item) : boolean{
		console.log(item);
		console.log(this.businessSelecionado.value.businessesId);
		if (item == this.businessSelecionado.value.businessesId){
			return false;
		}
		return true;
 }

 getHours(time) : string {
	 var horario = new Date(time);
	 var horarioFormadatao = horario.getHours() + ":" + horario.getMinutes();
	 return horarioFormadatao;
 }



}
