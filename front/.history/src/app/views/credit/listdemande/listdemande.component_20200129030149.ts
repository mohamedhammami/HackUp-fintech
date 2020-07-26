import { Component, OnInit } from "@angular/core";
import { DemandeCredit } from "../../../models/demandecredit.model";
import { Router } from "@angular/router";
import { CreditService } from "../../../services/credit.service";
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.scss']
})
export class ListdemandeComponent implements OnInit {
  demande: DemandeCredit = {
    Id: 0,
    montant: null,
    raison: "",
    typeCredit: "",
    user:this.authService.getUser(),
  };
  constructor(
    private authService: AuthService,
    private creditService: CreditService,
    private router: Router,

  ) {}

  ngOnInit() {
  }

}
