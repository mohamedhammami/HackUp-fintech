import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoligatoireComponent } from './boligatoire.component';

describe('BoligatoireComponent', () => {
  let component: BoligatoireComponent;
  let fixture: ComponentFixture<BoligatoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoligatoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoligatoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
