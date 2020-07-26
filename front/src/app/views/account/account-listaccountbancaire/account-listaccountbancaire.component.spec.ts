import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListaccountbancaireComponent } from './account-listaccountbancaire.component';

describe('AccountListaccountbancaireComponent', () => {
  let component: AccountListaccountbancaireComponent;
  let fixture: ComponentFixture<AccountListaccountbancaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountListaccountbancaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListaccountbancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
