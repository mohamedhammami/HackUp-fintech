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

  ngOnnit() {
    if (this.authService.getUser() != null) {
      this.id1 = this.authService.getUser().id;
         }
    this.accountService.getAccount(this.id1).subscribe(
      response => {this.comptebancaire = response; }
     );
   }
   }


   ngOnInit() {
    this.loadActivities();
    if (this.authService.getUser() != null) {
      this.id1 = this.authService.getUser().id;
         }
  }

  async loadActivities() {
    try {
      const result: any = await this.candidateService.getActivities();
      if (result) {
        this.activities = result;
      }
    } catch (error) {}
  }
}
 
 
