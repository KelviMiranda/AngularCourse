import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css']
})

export class Lesson4Component implements OnInit{

  ngOnInit(): void {
    
  }

  object = {
    nome: 'Pedro',
    age: 30,
    job:'Programator',
    isProgramtor: true
  }

  isData:boolean = false;
  emptyData = ['redColor', 'lineTrought'];
  size:number = 30;
  
  str:string = "Restaurar dados";
  
  event(){
    this.isData =! this.isData; 
    if(this.isData){
      this.str = "Excluir dados"
    }else{
      this.str = "Restaurar dados"
    }
  }
}
