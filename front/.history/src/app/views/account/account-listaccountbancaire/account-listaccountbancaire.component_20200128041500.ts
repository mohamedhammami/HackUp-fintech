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


  allRequest: AccountModel[];
  constructor(
    private accountService: AccountService,
    private authService: AuthService,

    
  ) {}


   ngOnInit() {
     
    if (this.authService.getUser() != null) {
      this.id = this.authService.getUser().id;
         }
    this.accountService.getcb().subscribe(
      response => {this.allRequest = response; }
     );
   }
 
 }
  

