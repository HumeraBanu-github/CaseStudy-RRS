import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageTrainService } from '../Services/manage-train.service';
import { Train } from '../train';

@Component({
  selector: 'app-view-train-by-id',
  templateUrl: './view-train-by-id.component.html',
  styleUrls: ['./view-train-by-id.component.css']
})
export class ViewTrainByIdComponent implements OnInit {
  trains:Train = new Train();
  registerForm: FormGroup;
trainNo:number;
  constructor(private service:ManageTrainService , private route : Router,private act:ActivatedRoute) { }

  ngOnInit(): void {
    this.trains=new Train();
    this.trainNo=this.act.snapshot.params['trainNo']
    this.service.getTrainById(this.trainNo).subscribe(data=>{
      console.log(data)
      this.trains=data;
    })
    }

}
