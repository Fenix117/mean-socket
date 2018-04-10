import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class AuthRoutingModule { }