import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { DemandeCredit } from "../models/demandecredit.model";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  BASE_URL = environment.backend ;
  constructor(private httpClient: HttpClient,private authService: AuthService) {}
  createDemande(demande: DemandeCredit ) {
 
    return this.httpClient.post(`${this.BASE_URL}/addrequest`, demande);
  }
  getDemande() {
    return this.httpClient.get(`${this.BASE_URL}/allrequest`).toPromise();
  }

}
