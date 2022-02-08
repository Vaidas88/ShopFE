import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ShopComponent } from './components/shops/shop/shop.component';
import { ShopItemComponent } from './components/shops/shop-item/shop-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { CreateShopComponent } from './components/shops/create-shop/create-shop.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    ShopComponent,
    ShopItemComponent,
    NavigationComponent,
    CreateShopComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
