import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthReq} from '../auth-req';
import { UserService } from '../user.service';
import { Train } from '../train';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../login-service.service';
import { analyzeFile } from '@angular/compiler';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  // form:FormGroup;
  //  auth:AuthReq=new AuthReq();
  // credentials={
  //   username:'',
  //   password:'',
  // }
//   trains:Train[];
 
//   registerForm: FormGroup;

// myStorage = window.localStorage;
// constructor( private route : Router, private loginService : LoginServiceService) { }
  
// }
//   ngOnInit() {
// //     this.InitForm();
//    }

// isValid(controlName) {
//   return this.registerForm.get(controlName).invalid && (this.registerForm.get(controlName).touched || this.registerForm.get(controlName).dirty);
// }
//   InitForm(){
//     this.registerForm = new FormGroup({
//       id:new FormControl(null),
//       username: new FormControl(null,Validators.required),
//       password: new FormControl(null, Validators.required),
//       // cAddress: new FormControl(''),
//     });
//   }
//   register(){
//     if (this.registerForm.valid)
    
//     {
//      // console.log("Submit the form");
//       //token generate
//       this.loginService.generateToken(this.registerForm.value).subscribe(
//         (response:any)=>{
//           console.log(response)
//             this.loginService.loginUser(response)
//             // window.location.href="/dashboard"\
//             this.goToUser();
//         },
//         error=>{
//             console.log(error);
//           alert(error);
           
//         }
//       )
//     }
//     else{

//       console.log("Feilds are empty");
//       alert("Invalid Or Empty Fields");
//     }

// }
   
//   goToUser(){
    
//     this.route.navigate(['/dashboard']);
    
//   }
// submit()

//   {

//     //console.log("from is submitted");

//     if((this.credentials.username!=''&& this.credentials.password!='')&&(this.credentials.username!=null&&this.credentials.password!=null))

//     {

//       console.log("we have to submit the from");

//       this.loginService.generateToken(this.credentials).subscribe(

//         (response)=>{

//          console.log(response);



//          this.loginService.loginUser(response)

//          window.location.href="dashboard"

         

//         },

//         error=>{

//           console.log(error);

         

//         }

//       )

     

//     }else{

//       console.log("Fields are empty");
//       alert("Enter The Details!")
     

//     }

//   }


loginForm: FormGroup;
myStorage = window.localStorage;
constructor( private route : Router, private apiService : LoginServiceService) { 
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
            this.apiService.loginUser(data);
            window.location.href="trainById"
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

public loggedin = false;

ngOnInit():void{
 
   this.loggedin = this.apiService.isLoggedIn();
  // this.Adminloggedin = this.adminService.isLoggedIn();
}
logoutUser(){
  this.apiService.logout();
  location.reload();
}


}
