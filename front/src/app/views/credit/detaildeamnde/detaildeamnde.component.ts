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
  detaildemande: DemandeCredit;

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
        this.detaildemande = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }

}
