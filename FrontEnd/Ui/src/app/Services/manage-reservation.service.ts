import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../reservation';
import { Train } from '../train';

@Injectable({
  providedIn: 'root'
})
export class ManageReservationService {
  public apiUrl = "http://localhost:8002" 
  constructor(private http:HttpClient) { }
  getReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation-service/reservation/getall`);
  }
  deleteReservation(rId:number):Observable<object>{
    return this.http.delete(`${this.apiUrl}/reservation-service/reservation/Delete/${rId}`)
  }
}
