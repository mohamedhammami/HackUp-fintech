import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceEditComponent } from './assurance-edit.component';

describe('AssuranceEditComponent', () => {
  let component: AssuranceEditComponent;
  let fixture: ComponentFixture<AssuranceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuranceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuranceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
