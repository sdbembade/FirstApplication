import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  Username:string="John"
  UseremailId:string="john@gmail.com"

  Employeedeatails:any={
    Name:"Steve",
    Designation:"Angular Developer",
    Place:"Pune",
    Skills:["HTML","CSS","Angular"]

  }
  imgPath:string ="https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8960063/og_image/optimized/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png"
  
  isDisabled:boolean=false;

  btnclick(){
    console.log("button clicked");


  }
  counter:number=0;
  increment(){
    if(this.counter<5){
    this.counter++;
  }
}
  decrement(){
     if(this.counter>0)
    this.counter--;
  }
  modifyFName(){
    console.log("FName Changed");
  }
firstName:string=""
  modifyName(event:any){
console.log("entered Value",event.target.value);
this.firstName=event.target.value;
  }
  middleName:string=""
  modifymiddle(event:any){
console.log("entered Value",event.target.value);
this.middleName=event.target.value;
  }

  LastName:string=""
  modifylast(event:any){
console.log("entered Value",event.target.value);
this.LastName=event.target.value;
  }
 Price:number=0;
modifyprice(event:any){
  console.log("entered value",event.target.value);
  this.Price=event.target.value;

}
Quantity:number=0;
modifyquantity(event:any){
  console.log("entered value",event.target.value);
  this.Quantity=event.target.value;

}

totalPrice:number=0;
modifytotal(event:any){

  this.totalPrice=this.Price*this.Quantity ;


}
btn(){
  console.log("button clicked");
}
}