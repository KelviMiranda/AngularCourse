import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6Component } from './lesson6.component';

describe('Lesson6Component', () => {
  let component: Lesson6Component;
  let fixture: ComponentFixture<Lesson6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson6Component]
    });
    fixture = TestBed.createComponent(Lesson6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
