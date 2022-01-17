import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../Services/admin-login.service'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  myStorage = window.localStorage;
  constructor( private route : Router, private apiService : AdminLoginService) { 
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    }); 
  }
  
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && (this.loginForm.get(controlName).touched || this.loginForm.get(controlName).dirty);
  }
  
  login() {
    console.log(this.loginForm.value);
    
    if (this.loginForm.valid) {
      this.apiService.generateToken(this.loginForm.value)
        .subscribe(
          (data) => {
            if(data){
              console.log("login completed")
              // localStorage.setItem('userdetails',JSON.stringify(this.loginForm.value) )
              // console.log()
              this.apiService.loginAdmin(data);
              window.location.href="dashboard"
            }
            
            else{
              alert("invalid user")
            }
          },
          error => {
            console.log(error + 'error')
           }
        );
    }
    
    
  }
  
  ngOnInit(): void {
    
  }
  

}
