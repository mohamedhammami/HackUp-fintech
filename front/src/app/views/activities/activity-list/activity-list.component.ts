import { Component, OnInit } from "@angular/core";
import { ActivityModel } from "../../../models/candidate.model";
import { CandidateService } from "../../../services/candidates.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-activity-list",
  templateUrl: "./activity-list.component.html",
  styleUrls: ["./activity-list.component.scss"]
})
export class ActivityListComponent implements OnInit {
  activities: Array<ActivityModel> = [];
  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadActivities();
  }

  async loadActivities() {
    try {
      const result: any = await this.candidateService.getActivities();
      if (result) {
        this.activities = result;
      }
    } catch (error) {}
  }
}
