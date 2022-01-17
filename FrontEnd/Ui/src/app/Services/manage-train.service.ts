import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../train';

@Injectable({
  providedIn: 'root'
})
export class ManageTrainService {
  public apiUrl = "http://localhost:8002" 
  constructor(private http:HttpClient) { }
  getTrains():Observable<Train[]>{
    return this.http.get<Train[]>(`${this.apiUrl}/train-availability-service/train/ShowAllTrains`);
  }
  createTrain(trains:Train):Observable<object>{
    return this.http.post(`${this.apiUrl}/train-availability-service/train/AddTrains`,trains);
  }
  getTrainById(trainNo:number):Observable<Train>{
    return this.http.get<Train>(`${this.apiUrl}/train-availability-service/train/findtrainById/${trainNo}`)
   }

   updateTrain(trainNo:number,trains:Train):Observable<Train>{
     return this.http.put<Train>(`${this.apiUrl}/train-availability-service/train/updateTraindetails/${trainNo}`,trains)
   }

   deleteTrain(trainNo:number):Observable<object>{
     return this.http.delete(`${this.apiUrl}/train-availability-service/train/delete/${trainNo}`)
   }
}
