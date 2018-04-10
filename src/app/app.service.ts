import { Injectable, EventEmitter } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class AppService {

  title = new Subject()

}