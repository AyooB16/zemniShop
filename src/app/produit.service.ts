import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';
const URL = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http:HttpClient) { }
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
  }
}
