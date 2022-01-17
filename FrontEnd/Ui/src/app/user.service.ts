import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { UrlResolver } from '@angular/compiler';
import { Train } from './train';
import { AuthReq } from './auth-req';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string ;
   public baseUrl:string;  
   public Uurl:string;
   public Ulurl:string;
   public username: string;
   public password: string;
  constructor(private http:HttpClient,private route:Router) {
    this.baseUrl = "http://localhost:8082/train/";
    this.url = "http://localhost:8082/train/AddTrains";
    this.Uurl = "http://localhost:8085/reg"
    this.Ulurl = "http://localhost:8085/auth"
   }
   getTrains():Observable<Train[]>{
    return this.http.get<Train[]>(`${this.baseUrl}/ShowAllTrains`);
  }
  // getUsers():Observable<User[]>{
  //   return this.http.get<User[]>(this.baseUrl);
  // }
  createUser(user:User):Observable<object>{
    return this.http.post(this.Uurl,user);
  }
  
  Login(request){
    return this.http.post(this.Ulurl,request,{responseType:'text' as 'json'});
  }
  getAlltrain(token):Observable<Train[]>{
  let tokenstr = "Bearer "+token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    return this.http.get<Train[]>(this.baseUrl,{headers,responseType:'text' as 'json'});
  }
  getTrainById(destination:string):Observable<object>{
    return this.http.get<Train[]>(`${this.baseUrl}/findtrainByDestination/${destination}`)
  }
  
 
}
