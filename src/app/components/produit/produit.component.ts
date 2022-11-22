import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { CartService } from 'src/app/cart.service';

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
  cart!:Article[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }
  addProduitToCart(idToAdd:number){
    this.cartService.addToCart(idToAdd);
  }
}
