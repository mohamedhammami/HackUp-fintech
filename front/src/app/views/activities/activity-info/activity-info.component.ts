import { Component, OnInit } from "@angular/core";
import { ActivityModel } from "../../../models/candidate.model";
import { ActivatedRoute } from "@angular/router";
import { CandidateService } from "../../../services/candidates.service";

@Component({
  selector: "app-activity-info",
  templateUrl: "./activity-info.component.html",
  styleUrls: ["./activity-info.component.scss"]
})
export class ActivityInfoComponent implements OnInit {
  activity: ActivityModel;

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadActivity(param.id);
      }
    });
  }

  async loadActivity(id) {
    try {
      const result: any = await this.candidateService.getActivity(id);
      if (result) {
        this.activity = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
