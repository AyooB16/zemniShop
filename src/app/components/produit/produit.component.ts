import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() id!:number;
  @Input() title!:String;
  @Input() category!:String;
  @Input() price!:number;
  @Input() image!:String;
  @Input() disponibility!:boolean;
  @Input() stars!:number;
  str!:string;
  cart!:number[];
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(idToAdd:number){
    if(localStorage.getItem("cart")!=null){
      this.str = String(localStorage.getItem("cart"));
      this.cart = JSON.parse(this.str);
      if(this.cart.indexOf(idToAdd)==-1){  
        this.cart.push(idToAdd);
        this.str=JSON.stringify(this.cart);
        localStorage.setItem("cart",this.str); 
        alert("Added to cart");
      }
      else{
        alert("Already into cart");
      }
    }
    else{
      this.str = '['+idToAdd+']';
      localStorage.setItem("cart",this.str);
      alert("Added to cart");
    }
    
  }
}
