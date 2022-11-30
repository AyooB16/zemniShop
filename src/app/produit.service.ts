import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
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
  getProduitsFromCart(cart:Article[]):Observable<Produit[]>{
    let str:String="";
    for(let i=0; i<cart.length;i++){
      str=str+"id="+cart[i]['id']+"&";
    }
    return this.http.get<Produit[]>(URL+'/products?'+str);
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
  getProduitById(id:number):Observable<Produit>{
    return this.http.get<Produit>(URL+'/products/'+id);
  }

}
