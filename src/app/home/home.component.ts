import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }
    userDisplayName='';
  ngOnInit() {
    this.userDisplayName=sessionStorage.getItem('login');
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  list1(){
    this.router.navigate(['home']);
  }
}
 
   
   
      
  
