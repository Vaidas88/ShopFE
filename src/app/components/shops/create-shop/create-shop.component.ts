import { Component, OnInit } from '@angular/core';
import {ShopService} from "../../../services/shop.service";
import CreateShop from "../../../models/create-shop.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {
  public shopName: string = '';
  public error: string | null = null;

  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.error = null;
    let createShop: CreateShop = {
      name: this.shopName
    };

    this.shopService.createShop(createShop).subscribe(
      (success) => this.router.navigateByUrl('/shops'),
      (error) => this.error = error.error);

    console.log(this.error);
  }

}
