import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Payment} from '../payment';
import { stringify } from '@angular/compiler/src/util';
import { HtmlParser } from '@angular/compiler';
import { style } from '@angular/animations';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
   orders:Reservation;
   rId:number;
   registerForm: FormGroup;
//   pay:Payment= new Payment();


constructor( private route : Router, private apiService : ReservationService,private act:ActivatedRoute) { 
  this.registerForm = new FormGroup({
    rId:new FormControl(null),
    cardnumber:new FormControl(null,Validators.required),
    name: new FormControl(null,Validators.required),
    exp: new FormControl(null, Validators.required),
    cVV: new FormControl(null, Validators.required),
    
    
  });
}

isValid(controlName) {
  return this.registerForm.get(controlName).invalid && (this.registerForm.get(controlName).touched || this.registerForm.get(controlName).dirty);
}


  ngOnInit(): void {
    
  
}
 saveit(){
  if(this.registerForm.valid){
    this.apiService.makePayment(this.registerForm.value).subscribe(
      (data)=>{
        if(data){
          console.log("Payment completed")
          //localStorage.setItem('userdetails',JSON.stringify(this.registerForm.value) )
          Swal.fire("Success !!" , 'Payment Done Successfully','success');
          this.route.navigate(['/thankyou']);
        }
        else{
          alert("Error is Making Payment")
        }
      },error =>{
        console.log(error +"error")
        Swal.fire("Error",'Server Error','error');
      }
    )
    }
   
 } 
 
//   register(){
//     this.service.makePayment(this.pay).subscribe(
//   data=>
//   console.log(data)
//   );
//}
// constructor(private route:Router) { }
// handler:any = null;
// ngOnInit() {

//   this.loadStripe();
// }

// pay(amount: any) {    

//   var handler = (<any>window).StripeCheckout.configure({
//     key: 'pk_test_51KFes9SH44scDXhTWj40ZEIr5OsxI8N7tBQRytbecTSur8tOkKGDD9b7NaQiRS2AuVX1qc31vvgzL55uDi19cV1t00ZLKmnBJv',
//     locale: 'auto',
//     token: function (token: any) {
//       // You can access the token ID with `token.id`.
//       // Get the token ID to your server-side code for use.
//       Swal.fire("Success !!" , 'Payment Done Successfully','success');
//       window.location.href="/thankyou"
//      // window.location.href=" POST /v1/tokens"
//     }
//   });

//   handler.open({
//     name: 'Payment ',
//     description: 'Make Your payment to complete Reservation',
//     amount: amount * 100
//   });

// }

// loadStripe() {
   
//   if(!window.document.getElementById('stripe-script')) {
//     var s = window.document.createElement("script");
//     s.id = "stripe-script";
//     s.type = "text/javascript";
//     s.src = "https://checkout.stripe.com/checkout.js";
//     s.onload = () => {
//       this.handler = (<any>window).StripeCheckout.configure({
//         key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
//         locale: 'auto',
//         token: function (token: any) {
//           // You can access the token ID with `token.id`.
//           // Get the token ID to your server-side code for use.
//           console.log(token)
//           alert('Payment Success!!');
//         }
//       });
//     }
     
//     window.document.body.appendChild(s);
//   }
// }

} 
