import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { assurancImmobilierModel } from "../models/assuranceImmobilier.model";

@Injectable()
export class AssuranceService {
  BASE_URL = environment.backend ;
  constructor(private httpClient: HttpClient) {}

  createAssuranceImmobilier(assuranceImmobilier: assurancImmobilierModel) {
    return this.httpClient.post(`${this.BASE_URL}/addassuranceImmobilier`, assuranceImmobilier);
  }



  getAssuranceimmobilier() {
    return this.httpClient.get(`${this.BASE_URL}/allAssuranceImmobilier`).toPromise();
    
  }
  getAssuranceImmobilier1(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/getAssuranceImmobilier/${id}`)
      .toPromise();
  }
  createAssuranceconso(assuranceImmobilier: assurancImmobilierModel) {
    return this.httpClient.post(`${this.BASE_URL}/addassuranceConso`, assuranceImmobilier);
  }



  getAssuranceconso() {
    return this.httpClient.get(`${this.BASE_URL}/allasuranceconso`).toPromise();
    
  }
  getAssurancecnso(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/getAssuranceConso/${id}`)
      .toPromise();
  }
}
