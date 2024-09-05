import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit{

  numero:number = 21;

  person = {
    name: 'John',
    age: 32,
    job:'Programator'
  }

  
  ngOnInit(): void {
    
  }

}
