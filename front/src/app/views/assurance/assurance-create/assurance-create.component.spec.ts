import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceCreateComponent } from './assurance-create.component';

describe('AssuranceCreateComponent', () => {
  let component: AssuranceCreateComponent;
  let fixture: ComponentFixture<AssuranceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuranceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuranceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
