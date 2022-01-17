import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  
  baseUrl='http://localhost:8088/auth';
  constructor(private http:HttpClient) { }
  loginAdmin(token){
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

  
  validateUser(data):Observable<object>{
    return this.http.post(this.baseUrl,data);
  }

}