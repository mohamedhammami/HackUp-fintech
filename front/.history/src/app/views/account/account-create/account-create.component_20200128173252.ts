import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../../models/account.model";
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
export interface TypeC {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.scss"]
})
export class AccountCreateComponent implements OnInit {
  typecompte: TypeC[] = [
    {value: 'EPARGNE', viewValue: 'EPARGNE'},
    {value: 'COURANT', viewValue: 'COURANT'},
    {value: 'DEPOT', viewValue: 'DEPOT'}
  ];

  id1 = null;
  account: AccountModel = {
    rib: 0,
    montant: null,
    ferme: false,
    typeCompte: "",
    dateouverture: "",
    user:this.authService.getUser(),
  };
  dateouverture: Date = new Date();

  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    if (this.authService.getUser() != null) {
      this.id1 = this.authService.getUser().id;
     
      console.log({ user: this.authService.getUser() });
    }
  }

  onSubmit() {
    console.log(this.account);
    const d = this.dateouverture;
    this.account.dateouverture =
      d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    const result = this.accountService.createAccount(this.account).subscribe(data=>{
      alert("Product created successfully.");
    });
  }
}
