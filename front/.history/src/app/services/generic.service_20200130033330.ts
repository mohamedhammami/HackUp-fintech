import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class GenericService {
  constructor(private httpClient: HttpClient) {}
  BASE_URL = environment.backend + "/generic";

  getGeneric(id) {
    return this.httpClient.get(`${this.BASE_URL}/get/${id}`).toPromise();
  }


  createproduit(genericEntityModel: GenericEntityModel) {
    return this.httpClient.post(`${this.BASE_URL}/create`, genericEntityModel);
  }

  creategeneric(genericEntityModel: GenericEntityModel) {
    return this.httpClient.post(`${this.BASE_URL}/creategeneric`, genericEntityModel);
  }

}
  export interface GenericValueModel {
    id: 1;
    createdAt: string;
    updatedAt: string;
    value: string;
    name: string;
    type: "int" | "string";
  }
  
  export interface GenericEntityModel {
    id?: 1;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    valueList: Array<GenericValueModel>;
  }


  


