import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../payment';

@Injectable({
  providedIn: 'root'
})
export class ManagePaymentService {
  public apiUrl = "http://localhost:8002"
  constructor(private http : HttpClient) { }
  getPayments():Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.apiUrl}/payment-service/pay/payment`);
  }
  deletePayments(txnId:string):Observable<Payment[]>{
    return this.http.delete<Payment[]>(`${this.apiUrl}/payment-service/pay/delete/${txnId}`)
}
}