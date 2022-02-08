import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { environment as env } from 'src/environments/environment';
import Shop from '../models/shop.model';
import CreateShop from '../models/create-shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Shop[]>{
    return this.http.get<Shop[]>(`${env.apiUrl}/Shop`);
  }

  createShop(createShop: CreateShop): Observable<any>{
    return this.http.post(`${env.apiUrl}/Shop`, createShop, {responseType: 'text'});
  }
}
