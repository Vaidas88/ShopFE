import { Component, OnInit } from '@angular/core';
import Shop from 'src/app/models/shop.model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  public shops: Shop[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getAll().subscribe(shops => this.shops = shops);
  }

  onDelete(id: number){

  }

}
