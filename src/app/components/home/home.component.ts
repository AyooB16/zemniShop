import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Produit } from 'src/app/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lesProduits!:Produit[];
  id!:number;

  constructor(private produitService:ProduitService,private route:Router) { }
 
  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => this.lesProduits = data)
  }



}
