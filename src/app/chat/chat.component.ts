import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'
import { ChatService } from './chat.service'
import { NotificationService } from '../notification/notification.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(
    private appService: AppService,
    private chatService: ChatService,
    private notificationService: NotificationService
  ) { }

  messages: Array<any> = []
  username = ""
  
  sendMsg(msg) {
    if(msg === "") {
      return console.log("Message is empty, please enter your message before sending")
    }
    this.chatService.sendMsg(`${this.username}: ${msg}`)
  }

  clearBox() {
    this.messages = []
  }

  ngOnInit() {
    this.appService.title.next('Chat')
    if(localStorage.getItem('username') !== null) {
      this.username = localStorage.getItem('username')
    }
    this.chatService.getMessages().subscribe( msg => {
      this.messages.push(msg)
    }, error => this.notificationService.error.emit(error))
  }

}
