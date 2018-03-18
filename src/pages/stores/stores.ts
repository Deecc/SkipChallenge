import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ProductsListPage } from '../products-list/products-list';

/**
 * Generated class for the StoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {

  stores:any;
  public store;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getStores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresPage');
  }

  getStores() {
    this.restProvider.getStores().then(
      data => {
        this.stores = data;
        console.log(this.stores);
      }
    )
  }

  openMenu(store){
    this.navCtrl.push(ProductsListPage, {store: store});
  }

}
