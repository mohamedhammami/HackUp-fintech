import { Component, OnInit } from "@angular/core";
import { ElectoralModal } from "../../../models/candidate.model";
import { Router } from "@angular/router";
import { CandidateService } from "../../../services/candidates.service";

@Component({
  selector: "app-electoral-create",
  templateUrl: "./electoral-create.component.html",
  styleUrls: ["./electoral-create.component.scss"]
})
export class ElectoralCreateComponent implements OnInit {
  candidateImageFile: any;
  electoral: ElectoralModal = {
    name: "",
    description: "",
    location: ""
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
  async submitElectoral() {
    const d = this.dateOfBirth;

    if (!this.candidateImageFile) {
      return;
    }

    try {
      const result: any = await this.candidateService.createElectoral(
        this.electoral,
        this.candidateImageFile
      );
      if (result) {
        this.router.navigateByUrl("/electorals/list");
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
