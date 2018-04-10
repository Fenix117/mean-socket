import { Injectable } from '@angular/core'
import * as io from 'socket.io-client'
import { Observable, Subject } from 'rxjs/Rx'

@Injectable()
export class ChatService {
  private url = 'http://localhost:7000'
  private socket
  
    
  constructor(){
    this.socket = io(this.url)
    console.log("Chat service constructor")
  }

  getMessages() {
    let message = new Subject()
    this.socket.on('serverMsg', msg => {
      message.next(msg)
    })
    return message
  }
  
  sendMsg(msg) {
    this.socket.emit('clientMsg', msg)
  }



}