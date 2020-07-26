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
    formData.append("montant", account.montant.toString());
    formData.append("typecompte", account.typeCompte.toString());
    formData.append("dateouverture", account.dateouverture);
    formData.append("ferme", account.ferme.valueOf.toString());
    formData.append("user", account.user.id.toString());
    return this.httpClient.post(`${this.BASE_URL}/addcompteBancaire`, account);
  }

  getcomptebanc(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/getcompteBancaireclient?id=${1}`)
      .toPromise();
  }
}
