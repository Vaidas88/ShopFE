import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopsComponent} from "./components/shops/shops.component";
import {CreateShopComponent} from "./components/shops/create-shop/create-shop.component";

const routes: Routes = [
  { path: 'create-shop', component: CreateShopComponent},
  { path: 'shops', component: ShopsComponent },
  { path: '**',   redirectTo: '/shops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
