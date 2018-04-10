import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ChatComponent } from './chat/chat.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  { 
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'} 
  },
  { 
    path: 'chat',
    component: ChatComponent 
  },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  { 
    path: '**',
    redirectTo: '/home'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

