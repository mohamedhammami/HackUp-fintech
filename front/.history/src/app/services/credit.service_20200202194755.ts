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
    const formData = new FormData();
    formData.append("montant", demande.montant  );
    formData.append("raison", demande.raison.toString());
    formData.append("typeCredit", demande.typeCredit);
    formData.append("user", demande.user.id.toString());
    return this.httpClient.post(`${this.BASE_URL}/addrequest`, demande);
  }




  getDemande() {
    return this.httpClient.get(`${this.BASE_URL}/allrequest`).toPromise();
  }
 
  getDemandeencours() {
    return this.httpClient.get(`${this.BASE_URL}/allrequestencours`).toPromise();
  }


  deletedemande(id) {
    return this.httpClient
      .delete(`${this.BASE_URL}/deleterequest/${id}`)
      .toPromise();
  }

  Acceptedemand(id) {
    return this.httpClient
      .delete(`${this.BASE_URL}/accept/${id}`)
      .toPromise();
  }

  refusdemande(id) {
    return this.httpClient
      .delete(`${this.BASE_URL}/refus/${id}`)
      .toPromise();
  }

  getDetaildemande(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/getrequest/${id}`)
      .toPromise();
  }

  updateCandidate(detaildemandemodif: DemandeCredit) {
    return this.httpClient
      .put(`${this.BASE_URL}/updaterequest/${detaildemandemodif.id}`, detaildemandemodif)
      .toPromise();
  }

}
