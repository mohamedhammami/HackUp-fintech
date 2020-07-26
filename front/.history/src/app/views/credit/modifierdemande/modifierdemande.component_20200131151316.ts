import { DemandeCredit } from "../../../models/demandecredit.model";
import { CreditService } from "../../../services/credit.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-modifierdemande',
  templateUrl: './modifierdemande.component.html',
  styleUrls: ['./modifierdemande.component.scss']
})
export class ModifierdemandeComponent implements OnInit {
  detaildemandemodif: DemandeCredit;
  candidateUpdate: DemandeCredit;
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private creditService: CreditService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadElectoral(param.id);
      }
    });
  }

  
  async loadElectoral(id) {
    try {
      const result: any = await this.creditService.getDetaildemande(id);
      if (result) {
        this.detaildemandemodif = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }

  toggleEdit() {
    this.candidateUpdate = JSON.parse(JSON.stringify(this.detaildemandemodif));
    this.isEdit = !this.isEdit;
  }
  async updateUser() {
    if (!this.candidateUpdate) {
      return;
    }

    try {
      const result: any = await this.creditService.updateCandidate(
        this.candidateUpdate
      );
      if (result) {
        this.isEdit = false;
        alert("Thanks for voting");
        this.loadElectoral(this.detaildemandemodif.id);
      }
    } catch (error) {
      console.log({ error });
    }
  }


}
