import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit{

  name:string = "Kelvin Dev";
  fruit: Array<string | number> = new Array('apple', 'orange', '80');

  object = {
    nome: 'Pedro',
    age: 30,
    job:'Programator',
    isProgramtor: true
  }
  ngOnInit(): void {
    
  }

}
