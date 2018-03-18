import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stores:any;
  store;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getStores();

  }

  getStores () {
    this.restProvider.getStores().then(
      data => {
        this.stores = data;
        console.log(this.stores);
      }
    )
  }

}
