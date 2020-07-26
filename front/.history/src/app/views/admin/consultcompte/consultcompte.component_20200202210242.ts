import { Component, OnInit } from '@angular/core';
import { DemandeCredit } from "../../../models/demandecredit.model";
import { CreditService } from "../../../services/credit.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { AccountModel } from "../../../models/account.model";


@Component({
  selector: 'app-consultcompte',
  templateUrl: './consultcompte.component.html',
  styleUrls: ['./consultcompte.component.scss']
})
export class ConsultcompteComponent implements OnInit {

  demandesencours: Array<AccountModel> = [];
  vv:AccountModel;
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private creditService: CreditService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isRole("Admin");
    this.loadDemande();
  }
  async loadDemande() {
    try {
      const result: any = await this.creditService.getDemandeencours();
      if (result) {
        this.demandesencours = result;
      }
    } catch (error) {}
  }

  async Acceptedemande(vv:DemandeCredit) {
   
      const result: any = await this.creditService.Acceptedemand(vv).subscribe(data=>{
      
     
        alert("Demande ACCEPTED");
        this.router.navigateByUrl("/home");
      });

      }
    
  

}
