import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListaccounttitreComponent } from './account-listaccounttitre.component';

describe('AccountListaccounttitreComponent', () => {
  let component: AccountListaccounttitreComponent;
  let fixture: ComponentFixture<AccountListaccounttitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountListaccounttitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListaccounttitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
