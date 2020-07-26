import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import { HandleError, HttpErrorHandler } from "./error.handler";

@Injectable()
export class UsersService {
  constructor(
    private http: Http,
    httpErrorHandler: HttpErrorHandler,
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}
}
