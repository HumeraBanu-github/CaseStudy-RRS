import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ManageReservationService } from '../Services/manage-reservation.service'

@Component({
  selector: 'app-manage-reservation',
  templateUrl: './manage-reservation.component.html',
  styleUrls: ['./manage-reservation.component.css']
})
export class ManageReservationComponent implements OnInit {
  orders:Reservation[];

  constructor(private mRService:ManageReservationService) { }

  ngOnInit(): void {
    this.getReservationBy();
  }
  getReservationBy(){
    this.mRService.getReservation().subscribe(data=>{
      console.log(data)
      this.orders=data;
    })
  }
 
  deleteReservation(rId:number){
    this.mRService.deleteReservation(rId).subscribe(data=>{
      console.log(data);
      this.getReservationBy()
      
    })
  }
}
