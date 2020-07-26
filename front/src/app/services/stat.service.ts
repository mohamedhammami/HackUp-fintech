import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class StatService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  BASE_URL = environment.backend + "/stats";

  getListStat() {
    return this.httpClient.get(`${this.BASE_URL}/electoral`).toPromise();
  }
  getCandidateStat() {
    return this.httpClient.get(`${this.BASE_URL}/candidate`).toPromise();
  }
}
