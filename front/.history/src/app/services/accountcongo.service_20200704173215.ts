import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountModel1 } from '../models/account1';

@Injectable({
  providedIn: 'root'
})
export class AccountCongoService {
  BASE_URL = environment.backend;

  constructor(private httpClient: HttpClient ) {}
  createAccount(account: AccountModel1 ) {
    const formData = new FormData();
    formData.append('firstname', account.firstname.toString());
    formData.append('lastname', account.lastname.toString());
    formData.append('password', account.password);
    formData.append('phonenumber', account.phonenumber.toString());
    formData.append('adress', account.adress.toString());
    return this.httpClient.post(`${this.BASE_URL}/acc/add`, account);
  }

}
