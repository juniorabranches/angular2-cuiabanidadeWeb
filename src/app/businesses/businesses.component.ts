import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import * as Firebase from 'firebase';
import { Observable } from 'rxjs/Rx';

@Component({
	templateUrl: "../views/businesses.html"
})
export class BusinessesComponent {

  categoriaSelecionada : any;
  listaDaCategoria: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire, private route: ActivatedRoute) {

  }

  ngOnInit() {
      console.log(this.route.params);
      this.categoriaSelecionada = this.route.params;
      this.listaDaCategoria = this.af.database.list('/businesses', {query: {orderByChild : "category"}});
      console.log(this.listaDaCategoria);
  }

    filter(cat) : boolean{
      console.log(cat);
      console.log(this.categoriaSelecionada.value.categoryId);
      if (cat == this.categoriaSelecionada.value.categoryId){
        return false;
      }
      return true;
   }

}
