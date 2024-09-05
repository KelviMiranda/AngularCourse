import { EventEmitterComponent } from './components/lesson5/event-emitter/event-emitter.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lesson1Component } from './components/lesson1/lesson1.component';
import { FatherComponent } from './components/sharedData/father/father.component';
import { Lesson4Component } from './components/lesson4/lesson4.component';
import { Lesson6Component } from './components/lesson6/lesson6.component';


const routes: Routes = [
  
  {
    path:'', component:Lesson6Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
