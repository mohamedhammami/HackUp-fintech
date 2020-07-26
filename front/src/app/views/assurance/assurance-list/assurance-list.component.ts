import { Component, OnInit } from "@angular/core";
import { assurancImmobilierModel } from "../../../models/assuranceImmobilier.model";
import { AssuranceService } from "../../../services/assurance.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-assurance-list',
  templateUrl: './assurance-list.component.html',
  styleUrls: ['./assurance-list.component.scss']
})
export class AssuranceListComponent implements OnInit {
  assurancImmobiliers: Array<assurancImmobilierModel> = [];
  isAdmin = false;
  constructor(
    private assuranceService: AssuranceService,
    private authService: AuthService
  ) {}


  ngOnInit() {
    this.isAdmin = this.authService.isRole("Admin");
    this.loadAssurances();

  }

  async loadAssurances() {
    try {
      const result: any = await this.assuranceService.getAssuranceimmobilier();
      
      if (result) {
        this.assurancImmobiliers = result;
        console.log(this.assurancImmobiliers)
      }
    } catch (error) {}
  }
}
