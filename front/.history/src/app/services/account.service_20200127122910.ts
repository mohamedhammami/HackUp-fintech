import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CandidateModel, ElectoralModal } from "../models/candidate.model";

@Injectable()
export class AccountService {
  BASE_URL = environment.backend + "/account";
  constructor(private httpClient: HttpClient) {}

  createAccount(account) {
    return this.httpClient.post(`${this.BASE_URL}/create`, account).toPromise();
  }
  
}
