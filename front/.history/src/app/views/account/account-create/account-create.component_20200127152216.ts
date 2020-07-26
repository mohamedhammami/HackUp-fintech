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
  id = null;
  account: AccountModel = {
    Rib: 0,
    montant: null,
    ferme: false,
    id:null,
  };
  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    if (this.authService.getUser() != null) {
      this.myName = this.authService.getUser().id;
      console.log({ user: this.authService.getUser() });
    }
  }

  onSubmit() {
    console.log(this.account);
    const result = this.accountService.createAccount(this.account).subscribe(data=>{
      console.log({data});
      this.account.id=this.authService.getUser().id;
    });
  }
}
