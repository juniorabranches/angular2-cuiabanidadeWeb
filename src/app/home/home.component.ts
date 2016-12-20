import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
	templateUrl: "../views/home.html",
  styleUrls: ['./home.css']
})
export class HomeComponent {

	items: FirebaseListObservable<any[]>;
	categories: FirebaseListObservable<any[]>;
	contrato: FirebaseListObservable<any>;
	midia: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
		this.items = af.database.list('/reviews', {
		  query: {
		    limitToLast: 8,
		    orderByChild: 'date'
		  }
		});
		console.log(this.items);


		this.categories = af.database.list('/categories', {
			query: {
				orderByChild: 'name'
			}
		});

		console.log(this.categories);

		this.midia = af.database.list('/midia', {
			query: {
				limitToLast: 6
			}
		});
		console.log(this.midia);
  }

	contratar(tipo:string, nome:string, empresa:string, descricao:string){

     this.contrato = this.af.database.list('/contract');
	   this.contrato.push({ type: tipo, name: nome, businesses: empresa, comment: descricao});
		 alert('Obrigado pelo contato. Muito em breve retornaremos!');

	}


}
