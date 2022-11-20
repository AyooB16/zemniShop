import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart';

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
  constructor() { }

  ngOnInit(): void {
  }

}
