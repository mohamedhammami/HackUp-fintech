import { Component, OnInit } from "@angular/core";
import { DemandeCredit } from "../../../models/demandecredit.model";
import { Router } from "@angular/router";
import { CreditService } from "../../../services/credit.service";

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.scss']
})
export class ListdemandeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
