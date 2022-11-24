import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  lesProduits!:Produit[];

  constructor(private produitService:ProduitService) { 
    
  }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {this.produitService.setProduitsService(data); this.lesProduits=data});
  }
    

}
