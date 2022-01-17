import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';
import { PaymentComponent } from './payment/payment.component';
import { Reservation } from './reservation';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  trains:Train= new Train();
  apiUrl:string;
  order:Reservation=new Reservation();
  
  constructor(private http:HttpClient) {
    this.apiUrl="http://localhost:8002"
   }
  createReservation(order:Reservation):Observable<Object>{
   return this.http.post(`${this.apiUrl}/reservation-service/reservation/addorder`,order);
  }

  makePayment(pay:Payment)
    :Observable<Object>{
      return this.http.post(`${this.apiUrl}/payment-service/pay/payment`,pay);
  }
  
  getTrainById(trainNo:number):Observable<Train>{
   return this.http.get<Train>(`${this.apiUrl}/train-availability-service/train/findtrainById/${trainNo}`)
  }

  getReservationById(rId:number):Observable<Reservation>{
    return this.http.get<Reservation>(`${this.apiUrl}/reservation-service/reservation/get/${rId}`)
  }
}
