import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  CandidateModel,
  ActivityModel,
  ElectoralModal
} from "../../../models/candidate.model";
import { CandidateService } from "../../../services/candidates.service";
import { ThrowStmt, IfStmt } from "@angular/compiler";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-candidate-info",
  templateUrl: "./candidate-info.component.html",
  styleUrls: ["./candidate-info.component.scss"]
})
export class CandidateInfoComponent implements OnInit {
  candidate: CandidateModel;
  candidateUpdate: CandidateModel;
  activities: Array<ActivityModel> = [];
  electorals: Array<ElectoralModal> = [];
  currentElectoral: ElectoralModal;
  score = 0;
  vote = 50;
  isEdit = false;
  isAdmin = false;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private candidateService: CandidateService
  ) {}
  ngOnInit() {
    this.isAdmin = this.authService.isRole("Admin");
    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadCandidate(param.id);
      }
    });
  }
  toggleEdit() {
    this.candidateUpdate = JSON.parse(JSON.stringify(this.candidate));
    this.isEdit = !this.isEdit;
  }
  async loadCandidate(id) {
    this.isEdit = false;
    try {
      const result: any = await this.candidateService.getCandidate(id);
      if (result) {
        this.candidate = result;
        this.loadScore(id);
      }
    } catch (error) {
      console.log({ error });
    }
    this.loadActivities();
    this.loadElectorals();
  }

  async loadScore(id) {
    try {
      const result: any = await this.candidateService.getCandidateScore(id);
      if (result) {
        this.score = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }

  async updateUser() {
    if (!this.candidateUpdate) {
      return;
    }

    try {
      const result: any = await this.candidateService.updateCandidate(
        this.candidateUpdate
      );
      if (result) {
        this.isEdit = false;
        alert("Thanks for voting");
        this.loadCandidate(this.candidate.id);
      }
    } catch (error) {
      console.log({ error });
    }
  }
  async voteUser() {
    try {
      const result: any = await this.candidateService.voteCandidate(
        this.candidate.id,
        this.vote
      );
      if (result) {
        alert("Thanks for Updating The Candidate");
        this.loadCandidate(this.candidate.id);
      }
    } catch (error) {
      console.log({ error });
    }
  }

  async removeActivity(idActivity) {
    try {
      const result: any = await this.candidateService.unAssignActivity(
        this.candidate.id,
        idActivity
      );
      if (result) {
        alert("Activity removed");
        this.loadCandidate(this.candidate.id);
      }
    } catch (error) {
      console.log({ error });
    }
  }

  async addActivity(idActivity) {
    try {
      const result: any = await this.candidateService.assignActivity(
        this.candidate.id,
        idActivity
      );
      if (result) {
        alert("Activity Added");
        this.loadCandidate(this.candidate.id);
      }
    } catch (error) {
      console.log({ error });
    }
  }

  async assignElectoral() {
    try {
      const result: any = await this.candidateService.assignElectoral(
        this.candidate.id,
        this.currentElectoral.id
      );
      if (result) {
        alert("Elecotral Assigned");
        this.loadCandidate(this.candidate.id);
      }
    } catch (error) {
      console.log({ error });
    }
  }

  async loadActivities() {
    try {
      this.activities = [];
      const result: any = await this.candidateService.getActivities();
      if (result) {
        result.map(activity => {
          let exist = false;
          this.candidate.activities.map(act => {
            if (act.id == activity.id) {
              exist = true;
            }
          });
          if (!exist) {
            this.activities = [...this.activities, activity];
          }
        });
      }
    } catch (error) {}
  }

  async loadElectorals() {
    try {
      this.electorals = [];
      const result: any = await this.candidateService.getElectorals();
      if (result) {
        result.map(electoral => {
          if (
            !this.candidate.electoral ||
            electoral.id != this.candidate.electoral.id
          ) {
            this.electorals = [...this.electorals, electoral];
          }
        });
      }
    } catch (error) {}
  }
}
