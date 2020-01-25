import { Component } from '@angular/core';
import {MessengerService}from './messenger.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pname1="";
  price1="";
  pname2="";
  price2="";
  totalBill:number;
  serverCreated:boolean=false;
  serverCreated2:boolean=false;
  final:string="";
  final1:string="";
  tfinal:string="";
  tfinal1:string="";
  taxBill:number;
  tax: number;
  totalBill1:number;
  onClick()
  {
     var msg=new MessengerService;
     this.totalBill=msg.getBill(parseInt(this.price1),parseInt(this.price2));
    this.final=this.pname1;
    this.final1=this.pname2;
    this.serverCreated=true;
    
   }
   checkout()
   {
     var msg1=new MessengerService;
     this.totalBill1=msg1.getBill(parseInt(this.price1),parseInt(this.price2));
     this.tfinal=this.pname1;
    this.tfinal1=this.pname2;
    this.tax=this.totalBill1*0.2;
    this.taxBill=this.totalBill1+this.tax;
    this.serverCreated2=true;

   }
}