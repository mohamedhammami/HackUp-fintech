import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CandidateModel, ElectoralModal } from "../models/candidate.model";
import { AccountModel } from "../models/account.model";

@Injectable()
export class AccountService {
  BASE_URL = environment.backend ;
  constructor(private httpClient: HttpClient) {}

  createAccount(account: AccountModel ) {
    const formData = new FormData();
    formData.append("montant", account.montant);
    formData.append("typecompte", account.typeCompte.toString());
    formData.append("email", account.ferme);
    formData.append("twitter", candidate.twitter);
    formData.append("facebook", candidate.facebook);
    formData.append("dateofbirth", candidate.dateOfBirth);
    formData.append("image", file);
    return this.httpClient.post(`${this.BASE_URL}/addcompteBancaire`, account);
  }
}
