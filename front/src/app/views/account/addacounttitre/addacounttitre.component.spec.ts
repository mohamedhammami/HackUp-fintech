import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacounttitreComponent } from './addacounttitre.component';

describe('AddacounttitreComponent', () => {
  let component: AddacounttitreComponent;
  let fixture: ComponentFixture<AddacounttitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddacounttitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacounttitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
