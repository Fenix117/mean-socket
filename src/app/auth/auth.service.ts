import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(user): Observable<any> {
    return this.http.post('/auth/signup', user)
  }

  login(user): Observable<any> {
    return this.http.post('/auth/login', user)
  }

  getUser(userId): Observable<any> {
    return this.http.get(`/auth/getUser/${userId}`)      
  }

}