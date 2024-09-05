import { Component } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})

export class EventEmitterComponent {

  data?:string;
  eventoBuscado(name:string){
    this.data = name;
  }
}
