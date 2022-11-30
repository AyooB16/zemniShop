import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { CartService } from 'src/app/cart.service';
import { Produit } from 'src/app/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  cart!:Article[];
  cartProduits!:Produit[];
  constructor(private cartService:CartService,private produitService:ProduitService) { 

  }
  ngOnInit(): void {
    this.cart=this.cartService.getCart();
    this.produitService.getProduitsFromCart(this.cart).subscribe(data => this.cartProduits = data);
  }

  }


