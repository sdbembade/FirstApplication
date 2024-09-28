import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
  age:number=18;
  isShow:boolean=false;

  displayMoreContent(){
    this.isShow=true;
  }
  removeContent(){
    this.isShow=false;
  }
    isLoggedin:boolean=false;
  login(){
this.isLoggedin=true;
  }
  logout(){
this.isLoggedin=false;
  }

}
