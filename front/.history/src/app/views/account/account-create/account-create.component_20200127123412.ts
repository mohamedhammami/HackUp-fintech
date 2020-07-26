import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../../models/account.model";
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "app/services/account.service";

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.scss"]
})
export class AccountCreateComponent implements OnInit {
  myName = "ddd";
  account: AccountModel = {
    name: "",
    description: "",
    location: ""
  };
  constructor(private authService: AuthService,private accountService: AccountService) {}

  ngOnInit() {
    if (this.authService.getUser() != null) {
      this.myName = this.authService.getUser().role;
      console.log({ user: this.authService.getUser() });
    }
  }

  onSubmit(){

  }
}
