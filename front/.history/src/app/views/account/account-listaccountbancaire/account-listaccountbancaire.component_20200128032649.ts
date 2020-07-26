import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'app/models/account.model';
import { AccountService } from 'app/services/account.service';

@Component({
  selector: 'app-account-listaccountbancaire',
  templateUrl: './account-listaccountbancaire.component.html',
  styleUrls: ['./account-listaccountbancaire.component.scss']
})
export class AccountListaccountbancaireComponent implements OnInit {

  comptebancaire: Array<AccountModel> = [];
  constructor(
    private candidateService: AccountService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
  }

}
