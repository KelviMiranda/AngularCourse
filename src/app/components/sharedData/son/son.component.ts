import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {
  @Input() number?:number;
  @Input() pessoa!:{ name:string, age:number, job:string }
}
