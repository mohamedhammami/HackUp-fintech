import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'app/models/account.model';
import { AccountService } from 'app/services/account.service';
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-account-listaccountbancaire',
  templateUrl: './account-listaccountbancaire.component.html',
  styleUrls: ['./account-listaccountbancaire.component.scss']
})
export class AccountListaccountbancaireComponent implements OnInit {
idd=null;
  accounts: Array<AccountModel> = [];
  constructor(
    private accountService: AccountService,
    private authService: AuthService,

    
  ) {}


   ngOnInit() {
 this.idd=this.authService.getUser().id;
    this.loadAccount();
  }

  async loadAccount() {
    try {
      const result: any = await  this.accountService.getaccount(this.idd);
      if (result) {
        this.accounts = result;
        console.log(this.accounts)
      }
    } catch (error) {}
  }
}

