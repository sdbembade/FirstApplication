import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
    
  // options=[
  //   {label:"MH",value:"Maharashtra"},
  //   {label:"GJ",value:"Gujarat"},
  //   {label:"AP",value:"AndhraPradesh"},
  // ];
  // nrSelect="MH";


  // courses:string[]=["Angular Development","Java Development","DEVOPS","AWS","FullStack Developer","Salesforce Development"]
products:Product[]=[
  {productName:"Laptop",price:50000,quantity:2},
  {productName:"TV",price:75000,quantity:2},
  {productName:"IPhone",price:100000,quantity:1},
  {productName:"DSLR",price:60000,quantity:5}
  
];
}
interface Product{
  productName:string;
  price:number;
  quantity:number;
}