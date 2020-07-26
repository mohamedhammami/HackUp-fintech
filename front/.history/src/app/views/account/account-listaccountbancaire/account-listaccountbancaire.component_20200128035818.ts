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
  id1 = null;


  comptebancaire: Array<AccountModel> = [];
  constructor(
    private accountService: AccountService,
    private authService: AuthService,

    
  ) {}


   ngOnInit() {
    this.loadActivities();
    if (this.authService.getUser() != null) {
      this.id1 = this.authService.getUser().id;
         }
  }

  async loadActivities() {
    try {
      const result: any = await this.accountService.getAccount(1);
      if (result) {
        this.comptebancaire = result;
      }
    } catch (error) {}
  }
}
 
 
