import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CandidateModel, ElectoralModal } from "../models/candidate.model";

@Injectable()
export class CandidateService {
  BASE_URL = environment.backend + "/candidate";
  BASE_URL_ELECT = environment.backend + "/electoral";
  constructor(private httpClient: HttpClient) {}

  getCandidates(page, limit) {
    return this.httpClient
      .get(`${this.BASE_URL}/all?page=${page}&limit=${limit}`)
      .toPromise();
  }
  updateCandidate(candidate: CandidateModel) {
    return this.httpClient
      .put(`${this.BASE_URL}/update/${candidate.id}`, candidate)
      .toPromise();
  }
  getCandidate(id) {
    return this.httpClient.get(`${this.BASE_URL}/get/${id}`).toPromise();
  }
  voteCandidate(id, vote) {
    return this.httpClient
      .get(`${this.BASE_URL}/vote/${id}/${vote}`)
      .toPromise();
  }
  assignActivity(idc, ida) {
    return this.httpClient
      .get(`${this.BASE_URL}/assign/${idc}/${ida}`)
      .toPromise();
  }
  assignElectoral(idc, ide) {
    return this.httpClient
      .get(`${this.BASE_URL}/setElectoral/${idc}/${ide}`)
      .toPromise();
  }
  unAssignActivity(idc, ida) {
    return this.httpClient
      .get(`${this.BASE_URL}/unassign/${idc}/${ida}`)
      .toPromise();
  }
  getActivities() {
    return this.httpClient.get(`${this.BASE_URL}/allActivities`).toPromise();
  }
  getElectorals() {
    return this.httpClient.get(`${this.BASE_URL}/allElectorals`).toPromise();
  }
  getActivity(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/getActivity/${id}`)
      .toPromise();
  }
  getElectoral(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/getElectoral/${id}`)
      .toPromise();
  }

  createCandidate(candidate: CandidateModel, file: any) {
    const formData = new FormData();
    formData.append("firstname", candidate.firstname.toString());
    formData.append("lastname", candidate.lastname.toString());
    formData.append("email", candidate.email);
    formData.append("twitter", candidate.twitter);
    formData.append("facebook", candidate.facebook);
    formData.append("dateofbirth", candidate.dateOfBirth);
    formData.append("image", file);
    return this.httpClient
      .post(`${this.BASE_URL}/create`, formData)
      .toPromise();
  }

  // score
  getCandidateScore(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/score/candidate/${id}`)
      .toPromise();
  }
  getListScore(id) {
    return this.httpClient.get(`${this.BASE_URL}/score/list/${id}`).toPromise();
  }

  createElectoral(electoral: ElectoralModal, file: any) {
    const formData = new FormData();
    formData.append("name", electoral.name.toString());
    formData.append("description", electoral.description.toString());
    formData.append("location", electoral.location);
    formData.append("image", file);
    return this.httpClient
      .post(`${this.BASE_URL_ELECT}/create`, formData)
      .toPromise();
  }

  deleteElectoral(id) {
    return this.httpClient
      .delete(`${this.BASE_URL_ELECT}/delete/${id}`)
      .toPromise();
  }
}
