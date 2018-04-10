import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AppService } from '../../app.service'
import { AuthService } from '../auth.service'
import { NotificationService } from '../../notification/notification.service'
import { User } from '../user.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  signupForm: FormGroup

  onSubmit() {
    let user = new User(
      this.signupForm.value.username,
      this.signupForm.value.password
    )
    
    if(!user.username && !user.password){
      this.notificationService.notification.emit({
        name: "Username and password fields are empty",
        message: "Please enter your username and password"
      })
    }
    else if(!user.username) {
      this.notificationService.notification.emit({
        name: "Username field is empty",
        message: "Please enter username"
      })
    }
    else if(!user.password) {
      this.notificationService.notification.emit({
        name: "Password field is empty",
        message: "Please enter your password"
      })
    }
    

    if(user.username && user.password) {
      this.authService.signup(user).subscribe( 
        data => this.notificationService.notification.emit(data),
        error => this.notificationService.error.emit(error)
      )
    }
  }

  ngOnInit() {
    this.appService.title.next('Sign up')

    this.signupForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }
}