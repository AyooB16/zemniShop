import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/article';
import { CartService } from 'src/app/cart.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input()product!:Produit
  
  constructor(private cartService:CartService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {

  }
  addProduitToCart(idToAdd:number){
    this.cartService.addToCart(idToAdd,1);
  }
}
