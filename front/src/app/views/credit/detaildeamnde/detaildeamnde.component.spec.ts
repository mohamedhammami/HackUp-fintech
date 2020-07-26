import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildeamndeComponent } from './detaildeamnde.component';

describe('DetaildeamndeComponent', () => {
  let component: DetaildeamndeComponent;
  let fixture: ComponentFixture<DetaildeamndeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildeamndeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildeamndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
