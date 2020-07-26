import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
import { AccounttitreModel } from "app/models/accounttitre";

@Component({
  selector: 'app-addacounttitre',
  templateUrl: './addacounttitre.component.html',
  styleUrls: ['./addacounttitre.component.scss']
})
export class AddacounttitreComponent implements OnInit {

  id1 = null;
  account: AccounttitreModel = {
    rib: 0,
    montant: null,
    ferme: false,
    dateouverture: "",
    user1:this.authService.getUser(),
  };
  dateouverture: Date = new Date();

  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    if (this.authService.getUser() != null) {
     
      console.log({ user: this.authService.getUser() });
    }
  }

  onSubmit() {
    console.log(this.account);
    const d = this.dateouverture;
    this.account.user1= this.authService.getUser();
    this.account.dateouverture =
      d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    const result = this.accountService.createAccountTitre(this.account).subscribe(data=>{
      alert("Product created successfully.");
    });
  }
}
