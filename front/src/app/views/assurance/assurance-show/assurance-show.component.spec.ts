import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceShowComponent } from './assurance-show.component';

describe('AssuranceShowComponent', () => {
  let component: AssuranceShowComponent;
  let fixture: ComponentFixture<AssuranceShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuranceShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuranceShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
