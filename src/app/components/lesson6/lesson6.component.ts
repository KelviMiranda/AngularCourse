import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal.model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit{

    animals!:Animal[]

    animalDetails!:string;

    constructor(private listService:ListService){

    }

    ngOnInit(){
      this.listService.animals().subscribe(animal => this.animals = animal);
    }

    showAge(animal:Animal){
        this.animalDetails = `A idade do  ${animal.nome} é ${animal.age}`;
    }

    removeAnimal(animal:Animal){
    /*   this.listService.remove(this.animals, animal) */
      this.listService.remove(animal).subscribe(() => {
        this.animalDetails = "Animaldeletado com sucesso";
      });
    }
}
