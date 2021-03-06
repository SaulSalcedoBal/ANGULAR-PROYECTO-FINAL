import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// const endPoint: string = 'assets/json/cards-main.json';
const endPoint: string = 'http://192.168.1.68:9090/api/product/populares';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {    }

  getItems() {
    return this.http.get(endPoint);
  }
}
