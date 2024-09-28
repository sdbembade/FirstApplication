import { Component } from '@angular/core';



@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDbComponent {
  num1:number=0;
  num2:number=0;
  result:number=0;

  
  add(){
      this.result=this.num1+this.num2
    }
    sub(){
      this.result=this.num1-this.num2
    }
    multiply(){
      this.result=this.num1*this.num2
    }
    divide(){
      this.result=this.num1/this.num2
    }

    price:number=0;
    quantity:number=0;
    discount:number=0;
    totalPrice:number=0;

    totalP(){
      this.totalPrice= (this.price*this.quantity)-this.discount
    }

    name:string="";
     mobile:number=0;
     birthdate:number=0;
     age:number=0;

     calculatetheAge(){
      if(this.birthdate){
        const today = new Date();
        const birthDate = new Date(this.birthdate);
        let age = today.getFullYear()- birthDate.getFullYear();
        const month =today.getMonth()-birthDate.getMonth();
        if(month< 0 || ( month === 0 && today.getDate() < birthDate.getDate()))
          {
          age--;
        }
      this.age= age;
      }
      
    }
    productObj:Product = new Product();

  calculateTotalPrice() {
    if (this.productObj.price != undefined && this.productObj.quantity != undefined) {
      this.productObj.totalPrice = this.productObj.price * this.productObj.quantity
    }
  }

  saveProduct(){
    console.log("Product " , this.productObj);
  } 
}


class Product {
  price:number | undefined;
  quantity:number | undefined;
  totalPrice:number | undefined;
}


  


  




