import { Component, OnInit } from "@angular/core";
import { CandidateModel } from "../../../models/candidate.model";
import { CandidateService } from "../../../services/candidates.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-candidate-create",
  templateUrl: "./candidate-create.component.html",
  styleUrls: ["./candidate-create.component.scss"]
})
export class CandidateCreateComponent implements OnInit {
  candidateImageFile: any;
  candidate: CandidateModel = {
    firstname: "",
    lastname: "",
    facebook: "",
    twitter: "",
    dateOfBirth: "",
    email: ""
  };
  dateOfBirth: Date = new Date();
  constructor(
    private router: Router,
    private candidateService: CandidateService
  ) {}

  ngOnInit() {}

  onFileSelected(event) {
    this.candidateImageFile = event.target.files[0];
  }
  async submitCandidate() {
    const d = this.dateOfBirth;
    this.candidate.dateOfBirth =
      d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    if (!this.candidateImageFile) {
      return;
    }
    if (!this.candidate.dateOfBirth) {
      return;
    }
    try {
      const result: any = await this.candidateService.createCandidate(
        this.candidate,
        this.candidateImageFile
      );
      if (result) {
        this.router.navigateByUrl("/candidates/list");
      } else {
        console.log("error creating candidate");
        console.log({ result });
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
