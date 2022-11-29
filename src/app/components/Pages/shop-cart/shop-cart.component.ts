import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  cart!:Article[];
  str:any={};
  constructor() { }
  ngOnInit(): void {
   let cartId=localStorage.getItem(("cartID")||(0));
   this.str.id=cartId;
    console.log(this.str.id)
  }
   
  }


