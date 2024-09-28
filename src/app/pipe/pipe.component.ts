import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  msg="good morning"

  todayDate=new Date();
  Employeedeatails:any={
    Name:"Steve",
    Designation:"Angular Developer",
    Place:"Pune",
    Skills:["HTML","CSS","Angular"],
    salary:50000,
    Income:65020.07565

}
}
