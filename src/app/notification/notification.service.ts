import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class NotificationService {

  error = new EventEmitter()
  notification = new EventEmitter()

}