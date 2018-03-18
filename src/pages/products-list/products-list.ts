import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CartPage } from '../cart/cart';
import { CartProvider } from '../../providers/cart/cart';

/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  stores:any;
  products:any;
  store: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public cart: CartProvider) {
    this.store = navParams.get('store');
    console.log(this.store);
    this.getProducts(this.store.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsListPage');
  }

  getProducts(store) {
    this.restProvider.getStoreProducts(store).then(
      data => {
        this.products = data;
        console.log(this.products);
      }
    )
  }

  addToCart(product) {
    this.cart.addItem(product, 1);
    console.log(product);
  }

  goToCart() {
    this.navCtrl.push(CartPage);
  }





}
