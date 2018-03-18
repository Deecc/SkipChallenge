import { Component } from '@angular/core';

import { OrdersPage } from '../orders/orders';
import { CartPage } from '../cart/cart';
import { StoresPage } from '../stores/stores';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StoresPage;
  tab2Root = OrdersPage;
  tab3Root = CartPage;

  constructor() {

  }
}
