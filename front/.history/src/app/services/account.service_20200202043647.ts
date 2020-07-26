import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ContactModel } from "../models/contact";
import { AccountModel } from "../models/account.model";
import { AuthService } from "../services/auth.service";
import { AccounttitreModel } from "../models/accounttitre";



@Injectable()
export class AccountService {
  BASE_URL = environment.backend ;
  constructor(private httpClient: HttpClient,private authService: AuthService) {}

  createAccount(account: AccountModel ) {
    const formData = new FormData();
    formData.append("montant", account.montant.toString());
    formData.append("typecompte", account.typeCompte.toString());
    formData.append("dateouverture", account.dateouverture);
    formData.append("ferme", account.ferme.valueOf.toString());
    formData.append("user", account.user1.id.toString());
    return this.httpClient.post(`${this.BASE_URL}/addcompteBancaire`, account);
  }

  createContact(contact: ContactModel ) {
    const formData = new FormData();
    formData.append("montant", contact.firstname.toString());
    formData.append("typecompte", contact.lastname.toString());
    formData.append("dateouverture", contact.numtel.toString());
    formData.append("ferme", contact.boject.toString());
    formData.append("user", contact.country.toString());
    return this.httpClient.post(`${this.BASE_URL}/addcompteBancaire`, contact);
  }


  createAccountTitre(account: AccounttitreModel ) {
    const formData = new FormData();
    formData.append("montant", account.montant.toString());
    formData.append("dateouverture", account.dateouverture);
    formData.append("ferme", account.ferme.valueOf.toString());
    formData.append("user", account.user1.id.toString());
    return this.httpClient.post(`${this.BASE_URL}/addcompteTitre`, account);
  }

  getcomptebanc() {
    return this.httpClient
      .get(`${this.BASE_URL}/allcompteBancaire`)
      .toPromise();
      
  }
  getcomptetitre() {
    return this.httpClient
      .get(`${this.BASE_URL}/allCompteTitre`)
      .toPromise();
      
  }

  getobligation() {
    return this.httpClient
      .get(`${this.BASE_URL}/allobligation`)
      .toPromise();
      
  }

  getaction() {
    return this.httpClient
      .get(`${this.BASE_URL}/allaction`)
      .toPromise();
      
  }

  getDetailcompte(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/getcompteTitre/${id}`)
      .toPromise();
  }

  getaccount(RIB: number) { return this.httpClient.get('//localhost:8080/getcompteBancaire/' + RIB); }

  verser(RIB: number, montant: number) {
    return this.httpClient.put('//localhost:8080/CompteBancaire/' + RIB + '/' + montant + '/verser', this.getaccount(RIB));
  }
  retirer(RIB: number, montant: number) {
    return this.httpClient.put('//localhost:8080/CompteBancaire/' + RIB + '/' + montant + '/retirer', this.getaccount(RIB));
  }
  transferer(RIB1: number, RIB2: number, montant: number) {
    return this.httpClient.put('//localhost:8080/CompteBancaire/' + RIB1 + '/' + RIB2 + '/' + montant + '/transferer', this.getaccount(RIB1));

  }

}
