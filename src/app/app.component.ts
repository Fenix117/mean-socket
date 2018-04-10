import { Component, OnInit, EventEmitter } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]

})
export class AppComponent implements OnInit{
  constructor(private appService: AppService){}

  title


  
  ngOnInit() {
    this.appService.title
    .subscribe( data => this.title = data )
  }

}
