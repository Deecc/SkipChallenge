import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CartPage } from '../pages/cart/cart';
import { CartDetailPage } from '../pages/cart-detail/cart-detail';
import { OrdersPage } from '../pages/orders/orders';
import { OrdersDetailPage } from '../pages/orders-detail/orders-detail';
import { OrdersStatusPage } from '../pages/orders-status/orders-status';
import { ProductsDetailPage } from '../pages/products-detail/products-detail';
import { ProductsListPage } from '../pages/products-list/products-list';
import { StoresPage } from '../pages/stores/stores';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { CartProvider } from '../providers/cart/cart';
import { TestProvider } from '../providers/test/test';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CartPage,
    CartDetailPage,
    OrdersPage,
    OrdersDetailPage,
    ProductsDetailPage,
    ProductsListPage,
    StoresPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    // IonicStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CartPage,
    CartDetailPage,
    OrdersPage,
    OrdersDetailPage,
    ProductsDetailPage,
    ProductsListPage,
    StoresPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    CartProvider,
    TestProvider

  ]
})
export class AppModule {}
