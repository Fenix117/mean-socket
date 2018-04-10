import { Component, OnInit } from '@angular/core'
import { AppService } from '../../app.service'
import { AuthService } from '../auth.service'
import { NotificationService } from '../../notification/notification.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { User } from '../user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ){}

  loginForm: FormGroup

  onSubmit() {
    let user = new User(this.loginForm.value.username, this.loginForm.value.password)
    this.authService.login(user)
    .subscribe( data => {
      console.log(data)
      if(data.token) localStorage.setItem('token', data.token)
      if(data.username) localStorage.setItem('username', data.username)
      if(data.userId) localStorage.setItem('userId', data.userId)
      this.router.navigateByUrl('/profile') 
    }, error => {
      this.notificationService.error.emit(error)
    })
  }

  ngOnInit(){
    this.appService.title.next('Login')

    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })

  }
}