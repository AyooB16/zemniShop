import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lesProduits!:Produit[];
  @Input() id!:number;
  @Input() title!:String;
  @Input() category!:String;
  @Input() price!:number;
  @Input() image!:String;
  @Input() disponibility!:boolean;
  @Input() stars!:number;
  product:any={};
  constructor(private produitService:ProduitService) { }
 
  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => this.lesProduits = data)
  }
  addToCart()
  {
      let ProductId=JSON.parse(localStorage.getItem('ProductId')||('0'))
      this.product.id=ProductId;
      let cart=JSON.parse(localStorage.getItem('cart')||('[]'))
      cart.push(this.product);
      localStorage.setItem('cart',JSON.stringify(cart));
      localStorage.setItem('product',JSON.stringify(ProductId+1))
  }

}
