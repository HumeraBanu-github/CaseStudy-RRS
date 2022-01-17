import { HttpClient } from '@angular/common/http';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Train } from '../train';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {
  public loggedin = false;
 constructor(private http:HttpClient,public loginService:LoginServiceService,private route:Router){
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
