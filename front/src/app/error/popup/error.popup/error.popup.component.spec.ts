import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error.PopupComponent } from './error.popup.component';

describe('Error.PopupComponent', () => {
  let component: Error.PopupComponent;
  let fixture: ComponentFixture<Error.PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error.PopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error.PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
