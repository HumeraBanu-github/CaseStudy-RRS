import { Component } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthReq } from './auth-req';
import { LoginServiceService } from './login-service.service';
import { AdminLoginService } from './Services/admin-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Railway Reservation System';
  token:any;
  

  public loggedin = false;
 constructor(private http:HttpClient,public loginService:LoginServiceService, private adminService:AdminLoginService,private route:Router){
  // this.service.Login(this.token);
  
 }
 ngOnInit():void{
  
    this.loggedin = this.loginService.isLoggedIn();
 
 }
 logoutUser(){
   this.loginService.logout();
   location.reload();
 }
}

