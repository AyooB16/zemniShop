import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';
const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http:HttpClient) { }
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL+'/products');
  }
  addproduit(p:Produit):Observable<Produit>
  {
      return this.http.post<Produit>(URL+'/products',p);
  }
  deleteProduit(id:number)
  {
    return this.http.delete<Produit>(URL+"/products/"+id);
  }
  updateProduit(id:number,p:Produit)
  {
    return this.http.put<Produit>(URL+"/products/"+id,p);
  }
}
