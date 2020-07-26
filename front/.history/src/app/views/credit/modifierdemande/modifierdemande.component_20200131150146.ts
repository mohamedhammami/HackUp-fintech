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
  candidateUpdate: DemandeCredit;

  constructor(
    private route: ActivatedRoute,
    private creditService: CreditService,
  ) {}

  ngOnInit() {
  }

}
