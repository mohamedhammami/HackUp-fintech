import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
import { AccounttitreModel } from "app/models/accounttitre";
@Component({
  selector: 'app-account-listaccounttitre',
  templateUrl: './account-listaccounttitre.component.html',
  styleUrls: ['./account-listaccounttitre.component.scss']
})
export class AccountListaccounttitreComponent implements OnInit {

  accounts: Array<AccounttitreModel> = [];
  
  constructor(
    private accountService: AccountService,
    private authService: AuthService,

    
  ) {}


   ngOnInit() {
    this.loadAccount();
    
  }

  async loadAccount() {
    try {
      const result: any = await  this.accountService.getcomptetitre();
      if (result) {
        this.accounts = result;
        

        console.log(this.accounts)
      }
    } catch (error) {}
  }

  

  
}
