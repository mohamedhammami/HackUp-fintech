import { Component, OnInit, Renderer2 } from "@angular/core";
import { CandidateModel } from "../../../models/candidate.model";
import { CandidateService } from "../../../services/candidates.service";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-candidate-list",
  templateUrl: "./candidate-list.component.html",
  styleUrls: ["./candidate-list.component.scss"]
})
export class CandidateListComponent implements OnInit {
  candidates: Array<CandidateModel> = [];
  constructor(
    private candidateService: CandidateService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCandidate();
  }

  async loadCandidate() {
    try {
      const result: any = await this.candidateService.getCandidates(1, 100);
      if (result) {
        this.candidates = result;
      }
    } catch (error) {}
  }

  setImgBG(candidate: CandidateModel) {
    const parent: HTMLElement = document.getElementById(
      "candidate-bg-" + candidate.id
    );
    const url = candidate.image.replace(/\\/g, "/");

    this.renderer.setStyle(
      parent,
      "background",
      `url("${url}") center / cover no-repeat`
    );
  }
  goProfile(id) {
    this.router.navigateByUrl("/candidates/show/" + id);
  }
}
