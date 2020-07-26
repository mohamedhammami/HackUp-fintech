import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultdemandeComponent } from './consultdemande.component';

describe('ConsultdemandeComponent', () => {
  let component: ConsultdemandeComponent;
  let fixture: ComponentFixture<ConsultdemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultdemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
