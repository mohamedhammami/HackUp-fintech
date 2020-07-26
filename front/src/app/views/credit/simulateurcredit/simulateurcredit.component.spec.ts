import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurcreditComponent } from './simulateurcredit.component';

describe('SimulateurcreditComponent', () => {
  let component: SimulateurcreditComponent;
  let fixture: ComponentFixture<SimulateurcreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateurcreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateurcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
