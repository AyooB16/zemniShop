import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart!:Article[];
  str!:string;
  getCart(){
    return this.cart;
  }
  
  addToCart(idToAdd:number){
    if(localStorage.getItem("cart")!=null){
      this.str = String(localStorage.getItem("cart"));
      this.cart = JSON.parse(this.str);
      const found = this.cart.find((obj) => {return obj['id'] === idToAdd;});
      if(!found){
        var obj:Article={
          id:idToAdd,
          qte:0
        };
        this.cart.push(obj);
        this.str=JSON.stringify(this.cart);
        localStorage.setItem("cart",this.str); 
        alert("Added to cart");
      }
      else{
        alert("Already into cart");
     }
    }
    else{
      this.str = '[{"id":'+idToAdd+',"qte":0}]';
      localStorage.setItem("cart",this.str);
      alert("Added to cart");
    }
    
  }
  getCartProductsNumber():number{
    if(localStorage.getItem("cart")!=null){
      this.str = String(localStorage.getItem("cart"));
      this.cart = JSON.parse(this.str);
      return this.cart.length;
    }
    else{
      return 0;
    }
  }
}
