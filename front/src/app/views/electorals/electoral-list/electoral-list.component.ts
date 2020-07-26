import { Component, OnInit } from "@angular/core";
import { ActivityModel, ElectoralModal } from "../../../models/candidate.model";
import { CandidateService } from "../../../services/candidates.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-electoral-list",
  templateUrl: "./electoral-list.component.html",
  styleUrls: ["./electoral-list.component.scss"]
})
export class ElectoralListComponent implements OnInit {
  electorals: Array<ElectoralModal> = [];
  isAdmin = false;
  constructor(
    private candidateService: CandidateService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isRole("Admin");
    this.loadElectorals();
  }

  async loadElectorals() {
    try {
      const result: any = await this.candidateService.getElectorals();
      if (result) {
        this.electorals = result;
      }
    } catch (error) {}
  }

  async deleteElectoral(id) {
    try {
      const result: any = await this.candidateService.deleteElectoral(id);
      if (result) {
        alert("Electoral Removed");
        this.loadElectorals();
      }
    } catch (error) {}
  }
}
