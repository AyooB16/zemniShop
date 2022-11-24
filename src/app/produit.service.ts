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
  private lesProduitsService!:Produit[];
  getProduitsService():Produit[]{
    return this.lesProduitsService;
  }
  setProduitsService(prods:Produit[]){
    this.lesProduitsService=prods;
  }
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL+'/products');
  }
  addProduit(p:Produit):Observable<Produit>
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
  getProduitById(id:number):Produit{
    return this.lesProduitsService.filter(prod => prod.id == id)[0];
  }
  
}
