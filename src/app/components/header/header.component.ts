import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { CartService } from 'src/app/cart.service';
import { Produit } from 'src/app/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart!:Article[];
  constructor(private cartService:CartService) { }
  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }
  getCartProductsNumber():number{
    return this.cartService.getCartProductsNumber();
  }
}
