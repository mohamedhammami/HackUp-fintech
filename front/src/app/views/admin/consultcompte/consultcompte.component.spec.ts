import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultcompteComponent } from './consultcompte.component';

describe('ConsultcompteComponent', () => {
  let component: ConsultcompteComponent;
  let fixture: ComponentFixture<ConsultcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
