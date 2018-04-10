import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router
  
  ) { }

  private username
  private token
  private userId

  getData() {
    this.authService.getUser(this.userId).subscribe( data => {
      console.log(data)
    })
  }

  ngOnInit() {
    this.appService.title.next('Profile')
    
    if(localStorage.getItem('token') !== null
      && localStorage.getItem('username') !== null){

      this.username = localStorage.getItem('username')
      this.token = localStorage.getItem('token')
      this.userId = localStorage.getItem('userId')
    }
    else {
      console.log('You are not logged in, please log in')
      this.router.navigateByUrl('/login')
    }
    
  }

}
