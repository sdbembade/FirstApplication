import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent {
  orderStatus:string="delivered";

  updateStatus(status:string){
    this.orderStatus=status;
  }

}
