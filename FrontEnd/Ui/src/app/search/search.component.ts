import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  trains:Train[];
  destination="";
  startLocation="";
  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
    //this.user = [{"trainNo":12,"trainName":"ChennaiExpress","startLocation":"Delhi","destination":"Bangalore"}];
    this.service.getTrains().subscribe(data => {
     this.trains=data;});
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

  AddReservation(trainNo:number){
    this.route.navigate(["Order",trainNo]);
  }
}
