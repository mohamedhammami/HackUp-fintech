import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../../models/account.model";
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.scss"]
})
export class AccountCreateComponent implements OnInit {
  id1 = null;
  account: AccountModel = {
    Rib: 0,
    montant: null,
    ferme: false,
    id:this.id1,
  };
  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    if (this.authService.getUser() != null) {
      this.id1 = this.authService.getUser().id;
      this.account.id=this.id1;
      console.log({ user: this.authService.getUser() });
    }
  }

  onSubmit() {
    console.log(this.account,this.id1);
    const result = this.accountService.createAccount(this.account, this.id1 ).subscribe(data=>{
      console.log({data});
    });
  }
}
