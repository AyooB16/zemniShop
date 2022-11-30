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
  stars:boolean[]=[true,true,true,true,true];
  constructor(private cartService:CartService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    for(var i=0;i<5;i++){  
      if(i>=this.product.stars){  
        this.stars[i]=false;  
        
      } 
    }
  }
  addProduitToCart(idToAdd:number){
    this.cartService.addToCart(idToAdd,1);
  }

  
}

