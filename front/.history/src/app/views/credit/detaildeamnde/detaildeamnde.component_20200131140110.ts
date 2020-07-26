import { DemandeCredit } from "../../../models/demandecredit.model";
import { CreditService } from "../../../services/credit.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-detaildeamnde',
  templateUrl: './detaildeamnde.component.html',
  styleUrls: ['./detaildeamnde.component.scss']
})
export class DetaildeamndeComponent implements OnInit {
  electodemandesral: DemandeCredit;

  constructor() { }

  ngOnInit() {
  }

}
