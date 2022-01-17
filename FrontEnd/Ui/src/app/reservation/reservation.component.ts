import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation} from '../reservation'
import { ReservationService} from '../reservation.service'
import { Train } from '../train';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
amount:any;
//   order:Reservation=new Reservation();
//   constructor(private reservationService:ReservationService) { }

//   ngOnInit(): void {
//   }
//   AddReservation(){
//     this.reservationService.createReservation(this.order).subscribe(data=>{
//       console.log(data);
//       alert("Reservation Added Successfully");
//       window.location.href="/payment";
      
//     }),
//     error=>
//     console.log(error);
  
    
//   }
//   submit(){
//     this.AddReservation();
//   }
// }
registerForm: FormGroup;
trains:Train;
orders:Reservation;
passengers:any;
ticketFair:any;
trainNo:number;

myStorage = window.localStorage;
constructor( private route : Router, private apiService : ReservationService,private act:ActivatedRoute) { 
  this.registerForm = new FormGroup({
    rId:new FormControl(null),
    availableDate:new FormControl(null,Validators.required),
    startLocation: new FormControl(null,Validators.required),
    destination: new FormControl(null, Validators.required),
    passengers: new FormControl(null, Validators.required),
    ticketFair:new FormControl(null,Validators.required),
    status:new FormControl(null, Validators.required),
    totalTicketFair:new FormControl(null,Validators.required),
    // cAddress: new FormControl(''),
  });
}

isValid(controlName) {
  return this.registerForm.get(controlName).invalid && (this.registerForm.get(controlName).touched || this.registerForm.get(controlName).dirty);
}

register(){
  if(this.registerForm.valid){
    this.apiService.createReservation(this.registerForm.value).subscribe(
      (data)=>{
        if(data){
          console.log("registration completed")
          //localStorage.setItem('userdetails',JSON.stringify(this.registerForm.value) )
          this.route.navigate(['payment']);
        }
        else{
          alert("Error is Making Reservation")
        }
      },error =>{
        console.log(error +"error")
      }
    )
    }
   
}
  

ngOnInit(): void {
  this.trains=new Train();
  this.trainNo=this.act.snapshot.params['trainNo']
  this.apiService.getTrainById(this.trainNo).subscribe(data=>{
    console.log(data)
    this.trains=data;
  })
}

}
