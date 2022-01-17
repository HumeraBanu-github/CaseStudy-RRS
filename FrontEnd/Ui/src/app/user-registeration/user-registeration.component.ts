import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {User} from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit {
//   user : User = new User();
//   registerForm: any;
//   constructor(private service:UserService,private route:Router) { }
// }
  
  
//   ngOnInit(): void {

//   }
//   saveUser(){
//     this.service.createUser(this.user).subscribe(data => {
//       console.log(data);
//       this.goToUser();
//     },
//     error => console.log(error));
//   }
//   goToUser(){
//     this.route.navigate(['/login']);
//   }
//   submit(){
//     this.saveUser();
//   }

// }
registerForm: FormGroup;

myStorage = window.localStorage;
constructor( private route : Router, private apiService : UserService) { 
  this.registerForm = new FormGroup({
    id:new FormControl(null),
    username: new FormControl(null,Validators.required),
    password: new FormControl(null, Validators.required),
    // cAddress: new FormControl(''),
  });
}

isValid(controlName) {
  return this.registerForm.get(controlName).invalid && (this.registerForm.get(controlName).touched || this.registerForm.get(controlName).dirty);
}

register(){
  if(this.registerForm.valid){
    this.apiService.createUser(this.registerForm.value).subscribe(
      (data)=>{
        if(data){
          console.log("registration completed")
          Swal.fire("Success !!" , 'Registered Successfully','success');
         // localStorage.setItem('userdetails',JSON.stringify(this.registerForm.value) )
          //this.route.navigateByUrl('/login');
        }
        else{
          alert("User alredy registered")
        }
      },error =>{
        console.log(error +"error")
        Swal.fire("Error",'Server Error','error');
      }
    )
  }
//   this.apiService.register(this.userDetails).subscribe(
//   (data)=>{
//     if(data){
//     this.router.navigateByUrl('/header')
//     console.log("user registered")
//   }
//   else{
//     alert("user alredy exist");
//   }
// },
//   err=>{
//     console.error(err + 'error')
//   })
   
}

ngOnInit(): void {
}

}
