import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit  {

  numero:number = 0;
  nome!:string
  @Output() eventoEmitir:EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    
  }

  eventoEmitido(){
      this.eventoEmitir.emit(this.nome);
      this.numero +=1;
  }
}
