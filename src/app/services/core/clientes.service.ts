import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'http://192.168.1.68:9090/api/user';
const endPointWishlist: string = 'http://192.168.1.68:9090/api/product/wishlist/';
const endPointCode: string = 'http://192.168.1.68:9090/api/code/';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  id;
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(endPoint);
  }

  public getWishListByUserId(id: string) {
    // this.id = parseInt(id);
    return this.http.get(`${endPointWishlist}/user/${id}`);
  }

  public getCodesByUserId(id: string) {
    // this.id = parseInt(id);
    return this.http.get(`${endPointCode}/cliente/${id}`);
  }

  public registrarUsuario(usuario: any) {
    return this.http.post(`${endPoint}`,
      usuario, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
