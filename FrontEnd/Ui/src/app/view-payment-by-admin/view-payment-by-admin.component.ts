import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { ManagePaymentService } from '../Services/manage-payment.service'
@Component({
  selector: 'app-view-payment-by-admin',
  templateUrl: './view-payment-by-admin.component.html',
  styleUrls: ['./view-payment-by-admin.component.css']
})
export class ViewPaymentByAdminComponent implements OnInit {
  payment:Payment[];
 
  constructor(private pservice:ManagePaymentService) { }

  ngOnInit(): void {
    this.getPayment();
  }

  getPayment(){
    this.pservice.getPayments().subscribe(data=>{
      console.log(data);
      this.payment=data;
      
    })
  }

  deletePayment(txnId:string){
    this.pservice.deletePayments(txnId).subscribe(data=>{
      console.log(data);
      this.getPayment();
      
    })
  }
 
}
