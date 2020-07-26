import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAddaccountComponent } from './account-addaccount.component';

describe('AccountAddaccountComponent', () => {
  let component: AccountAddaccountComponent;
  let fixture: ComponentFixture<AccountAddaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAddaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAddaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
