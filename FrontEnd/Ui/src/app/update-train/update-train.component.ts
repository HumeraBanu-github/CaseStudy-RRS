import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageTrainService } from '../Services/manage-train.service';
import { Train } from '../train';

@Component({
  selector: 'app-update-train',
  templateUrl: './update-train.component.html',
  styleUrls: ['./update-train.component.css']
})
export class UpdateTrainComponent implements OnInit {

  trains:Train = new Train();
  registerForm: FormGroup;
trainNo:number;
constructor(private service:ManageTrainService , private route : Router,private act:ActivatedRoute) { 
    this.registerForm = new FormGroup({
      trainNo:new FormControl(null,Validators.required),
      trainName :new FormControl(null,Validators.required),
      startLocation: new FormControl(null,Validators.required),
      destination: new FormControl(null, Validators.required),
      ticketFair: new FormControl(null, Validators.required),
      availableDate:new FormControl(null, Validators.required)
      // cAddress: new FormControl(''),
    });
  }
  
isValid(controlName) {
  return this.registerForm.get(controlName).invalid && (this.registerForm.get(controlName).touched || this.registerForm.get(controlName).dirty);
}

update(){
  if(this.registerForm.valid){
    this.service.updateTrain(this.trainNo,this.trains).subscribe(
      (data)=>{
        if(data){
          console.log("registration completed")
          //localStorage.setItem('userdetails',JSON.stringify(this.registerForm.value) )
          this.route.navigate(["manageTrain"])
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
  this.service.getTrainById(this.trainNo).subscribe(data=>{
    console.log(data)
    this.trains=data;
  })
  }

}
