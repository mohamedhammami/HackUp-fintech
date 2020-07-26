import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDemandercreditComponent } from './credit-demandercredit.component';

describe('CreditDemandercreditComponent', () => {
  let component: CreditDemandercreditComponent;
  let fixture: ComponentFixture<CreditDemandercreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditDemandercreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDemandercreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
