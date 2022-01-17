import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { ManageTrainService } from '../Services/manage-train.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managetrain',
  templateUrl: './managetrain.component.html',
  styleUrls: ['./managetrain.component.css']
})
export class ManagetrainComponent implements OnInit {
  trains:Train[];
  destination="";
  startLocation="";
  registerForm: FormGroup;
trainNo:number;
  constructor(private mService:ManageTrainService,private route:Router) { 
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
  
}
  ngOnInit(): void {
    this.getTrainByAdmin();
  }
  search(){
    if(this.destination == "")
    {
      this.ngOnInit()
    }
    else{
      this.trains = this.trains.filter(res=>{
        return res.destination.toLowerCase().match(this.destination.toLowerCase());
      })
    }
  }
  searchSta(){
    if(this.startLocation == "")
    {
      this.ngOnInit()
    }
    else{
      this.trains = this.trains.filter(res=>{
        return res.startLocation.toLowerCase().match(this.startLocation.toLowerCase());
      })
    }
  }

  getTrainByAdmin(){
    this.mService.getTrains().subscribe(data=>{
      console.log(data)
      this.trains=data;
    })
  }
  viewTrain(trainNo:number){
    this.route.navigate(['ViewById',trainNo])
  }
  updateTrain(trainNo:number){
    this.route.navigate(['update',trainNo]);
  }
  deleteTrain(trainNo:number){
    this.mService.deleteTrain(trainNo).subscribe(data=>{
      console.log(data);
      this.getTrainByAdmin()
      
    })
  }
}
