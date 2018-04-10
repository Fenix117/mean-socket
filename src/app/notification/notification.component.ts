import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  constructor(private notificationService: NotificationService) { }

  modalVisible = false
  notificationTitle
  notificationMsg

  open() {
    this.modalVisible = true
  }

  close() {
    this.modalVisible = false
  }

  ngOnInit() {
    this.notificationService.error.subscribe( error => {
      this.notificationMsg = error.message
      this.notificationTitle = error.name
      this.modalVisible = true
    });

    this.notificationService.notification.subscribe( notification => {
      this.notificationMsg = notification.message
      this.notificationTitle = notification.name
      this.modalVisible = true
    })
  }

}
