import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CandidateService } from "../../../services/candidates.service";
import { ElectoralModal } from "../../../models/candidate.model";

@Component({
  selector: "app-electoral-show",
  templateUrl: "./electoral-show.component.html",
  styleUrls: ["./electoral-show.component.scss"]
})
export class ElectoralShowComponent implements OnInit {
  electoral: ElectoralModal;
  score = 0;
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
