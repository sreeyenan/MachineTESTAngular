import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{User} from '../user';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  isSubmitted=false;
  user:User;
  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.LoginForm=this.formBuilder.group({
    userName:['',[Validators.required]],
    password:['',[Validators.required,
    Validators.pattern('[^a-zA-Z]+$')]]
  });
}
  get formControls() { 
    return this.LoginForm.controls; }

login(){

console.log(this.LoginForm.value);

this.isSubmitted=true;
if(this.LoginForm.invalid){
  
  this.authService.login(this.LoginForm.value).subscribe(
    data =>{
      this.user=data;
      console.log(data);
      console.log(data.userName);
    if(data.userName !=null && data.password !=null && data.roleId!=null && data.roleId==100){
      this.isSubmitted=true;
      sessionStorage.setItem('login',data.userName)
      this.router.navigateByUrl('/home');
      
    }else{
    if(data.userName !=null && data.password !=null && data.roleId!=null && data.roleId==101){
      this.isSubmitted=true;
      sessionStorage.setItem('login',data.userName)
      this.router.navigateByUrl('/homeuser');
      
    }
    
    }
    // else{
    //   console.log('user');
    //   window.alert("invalid username or password");
    // }
   
    }
  );
 
  }
}
} 
