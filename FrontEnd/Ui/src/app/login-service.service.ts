import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Train } from './train';
import { User } from './user';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
   
  baseUrl='http://localhost:8085/auth';
  constructor(private http:HttpClient) { }
  loginUser(token){
    localStorage.setItem("token",token)
    return true;
  }
  isLoggedIn()
  {
    let token = localStorage.getItem('token');
   
    if(token==undefined || token==="" || token==null)
    {
      return false;
    }
    else{
      return true;
      
    }
  }
  logout(){
    localStorage.removeItem('token');
    
    return true;
  }
  generateToken(credentials:any){
    return this.http.post(this.baseUrl,credentials,{responseType:'text' as 'json'})
  }
  getToken(){
    return localStorage.getItem('token');
    
  }

  getTrains():Observable<Train[]>{
    return this.http.get<Train[]>(`${this.baseUrl}/`);
  }
  
  validateUser(data):Observable<object>{
    return this.http.post(this.baseUrl,data);
  }

}

