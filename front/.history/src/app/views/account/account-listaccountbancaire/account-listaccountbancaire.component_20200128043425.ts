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
  id = null;

  candidates: Array<AccountModel> = [];
  constructor(
    private accountService: AccountService,
    private authService: AuthService,

    
  ) {}


   ngOnInit() {
    this.loadCandidate();
  }

  async loadCandidate() {
    try {
      this.id =this.authService.getUser().id;
      const result: any = await  this.accountService.getcomptebanc();
      if (result) {
        this.candidates = result;
      }
    } catch (error) {}
  }
}

