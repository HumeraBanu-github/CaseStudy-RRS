import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagetrainComponent } from '../managetrain/managetrain.component';
import { ManageTrainService } from '../Services/manage-train.service';
import { Train } from '../train';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {
  trains:Train = new Train();
  registerForm: FormGroup;
trainNo:number;
constructor(private service:ManageTrainService , private route : Router) { 
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

register(){
  if(this.registerForm.valid){
    this.service.createTrain(this.registerForm.value).subscribe(
      (data)=>{
        if(data){
          console.log("registration completed")
          //localStorage.setItem('userdetails',JSON.stringify(this.registerForm.value) )
          this.route.navigate(['manageTrain']);
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
  }
 
}
