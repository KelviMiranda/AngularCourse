import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import module from angula material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { Lesson1Component } from './components/lesson1/lesson1.component';
import { FatherComponent } from './components/sharedData/father/father.component';
import { SonComponent } from './components/sharedData/son/son.component';
import { Lesson4Component } from './components/lesson4/lesson4.component';
import { EventEmitterComponent } from './components/lesson5/event-emitter/event-emitter.component';
import { ChildComponent } from './components/lesson5/child/child.component';
import { Lesson6Component } from './components/lesson6/lesson6.component';



@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    FatherComponent,
    SonComponent,
    Lesson4Component,
    EventEmitterComponent,
    ChildComponent,
    Lesson6Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    /* Import material module */
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule 
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
