import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cartList:any;
  total:any = 0;
  item: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: CartProvider, private alertCtrl: AlertController) {
    this.cartList = cart.getAllCartItems();
    this.getTotal();
    console.log("Cart list", this.cartList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  getTotal() {
    this.total = this.cart.getGrandTotal();
  }

  removeItemFromCart(item){
    let self = this;

    let alert = this.alertCtrl.create({
        title: 'Confirm Delete',
        message: 'Are you sure you want to remove food item from cart?',
        buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
        },
        {
            text: 'Remove',
            handler: () => {
                console.log('Remove clicked');
                self.cart.removeItemById(item.id);
            }
        }
        ]
    });
    alert.present();
  }

  quantityPlus(item){
    this.cart.quantityPlus(item);
  }

  quantityMinus(item){
      if(item.quantity > 1){
          this.cart.quantityMinus(item);
      } else {
          let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Quantity is 1, you cant reduce it, if you want to remove, please press remove button.',
              buttons: ['Ok']
          });
          alert.present();
      }

}

placeOrder(){

}

}
