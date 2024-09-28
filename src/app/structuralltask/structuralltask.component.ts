import { Component } from '@angular/core';

@Component({
  selector: 'app-structuralltask',
  templateUrl: './structuralltask.component.html',
  styleUrls: ['./structuralltask.component.css']
})
export class StructuralltaskComponent {

  products:Product[]=[
    {productName:"Laptop",price:75000,quantity:2},
    {productName:"TV",price:80000,quantity:2},
    {productName:"IPhone",price:60000,quantity:1},
    {productName:"DSLR",price:55000,quantity:5}
     ];
  }
  interface Product{
    productName:string;
    price:number;
    quantity:number;
  }

