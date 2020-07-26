import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../../models/account.model";
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { ContactModel } from "../../../models/contact";

export interface TypeC {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-createcontact",
  templateUrl: "./createcontact.component.html",
  styleUrls: ["./createcontact.component.scss"]
})
export class CreatecontactComponent implements OnInit {
  countrie: TypeC[] = [
    { value: "Tunisie", viewValue: "Tunisie" },
    { value: "France", viewValue: "France" },
    { value: "Algerie", viewValue: "Algerie" },
    { value: "Allemagne", viewValue: "Allemagne" },
    { value: "Belgique", viewValue: "Belgique" },
    { value: "Espagne", viewValue: "Espagne" }
  ];
  conctact: ContactModel = {
    id: 0,
    firstname: "",
    lastname: "",
    numtel: "",
    country: "",
    boject: ""
  };
  constructor(    private accountService: AccountService
    ) {}

  ngOnInit() {}

  onSubmit() {
    const result = this.accountService.createContact(this.conctact).subscribe(data=>{
      alert("Contact created successfully.");
    });
  }
}


