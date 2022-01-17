import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Train} from '../train';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css']
})
export class ViewTrainComponent implements OnInit {
  trains:Train[];
 
  constructor(private service:UserService) { }

  ngOnInit(): void {
    //this.user = [{"trainNo":12,"trainName":"ChennaiExpress","startLocation":"Delhi","destination":"Bangalore"}];
    this.service.getTrains().subscribe(data => {
     this.trains=data;});
  }

}
