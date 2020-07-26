import { DemandeCredit } from "../../../models/demandecredit.model";
import { CreditService } from "../../../services/credit.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-detaildeamnde',
  templateUrl: './detaildeamnde.component.html',
  styleUrls: ['./detaildeamnde.component.scss']
})
export class DetaildeamndeComponent implements OnInit {
  electodemandesral: DemandeCredit;

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService
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
      const result: any = await this.candidateService.getElectoral(id);
      if (result) {
        this.electoral = result;
        this.loadScore(id);
      }
    } catch (error) {
      console.log({ error });
    }
  }

  async loadScore(id) {
    try {
      const result: any = await this.candidateService.getListScore(id);
      if (result) {
        this.score = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
