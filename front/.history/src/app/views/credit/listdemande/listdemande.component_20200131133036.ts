import { DemandeCredit } from "../../../models/demandecredit.model";
import { CreditService } from "../../../services/credit.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.scss']
})
export class ListdemandeComponent implements OnInit {
  demandes: Array<DemandeCredit> = [];
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private creditService: CreditService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isRole("Client");
    this.loadDemande();
  }
  async loadDemande() {
    try {
      const result: any = await this.creditService.getDemande();
      if (result) {
        this.demandes = result;
      }
    } catch (error) {}
  }
  

  async Supprimerdemande(Id) {
    try {
      const result: any = await this.creditService.deletedemande(Id);
      if (result) {
        alert("Demande Removed");
        this.loadDemande();
      }
    } catch (error) {}
  }

}
