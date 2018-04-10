import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AuthRoutingModule } from './auth-routing.module'
import { AuthComponent } from './auth.component'
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [ AuthService ]
})

export class AuthModule { }