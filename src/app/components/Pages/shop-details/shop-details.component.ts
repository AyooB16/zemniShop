import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Produit } from 'src/app/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  Prod!:Produit;
  id!:number;
  lesProduits!:Produit[];
  qte=1;
  constructor(private activatedRoute:ActivatedRoute,private produitService:ProduitService , private cartService:CartService) { 
  }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => this.lesProduits = data)
    this.id=this.activatedRoute.snapshot.params['id']
    this.Prod=this.produitService.getProduitById(this.id)
  }
  addProduitToCart(idToAdd:number){
    if(this.qte>=1){
      this.cartService.addToCart(idToAdd,this.qte);
    }
    else{
      alert("La quantité doit etre non null");
    }
    
  }
}


  

