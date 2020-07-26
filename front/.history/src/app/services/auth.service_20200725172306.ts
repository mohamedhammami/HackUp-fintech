import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { UserModel } from "../models/user.model";

@Injectable()
export class AuthService {
  public jwtToken = null;
  public emailcurrentuser = null;
  private roles: Array<any>;
  isLoggedIn = false;
  BASE_URL = environment.backend + "/users";
  constructor(private httpClient: HttpClient) {}

  signIn(email, password) {
    const payload = {
      email,
      password
    };
    return this.httpClient.post(`${this.BASE_URL}/signin`, payload).toPromise();
  }

  signUp(user: UserModel) {
    return this.httpClient.put(`${this.BASE_URL}/create`, user).toPromise();
  }

  allUsers() {
    return this.httpClient.get(`${this.BASE_URL}/all`).toPromise();
  }

  getUser(): UserModel {
    if (localStorage.getItem("user")) {
      const user: UserModel = JSON.parse(localStorage.getItem("user"));
      return user;
    }
    return undefined;
  }

  getUserData(id) {
    return this.httpClient.get(`${this.BASE_URL}/get/${id}`).toPromise();
  }

  getUsers() {
    return this.httpClient.get(`${this.BASE_URL}/all`).toPromise();
  }

  isRole(role: "Client" | "Admin") {
    return this.getUser().role == role;
  }

  isLogged() {
    return !!this.getUser();
  }

  setUser(user: UserModel) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem("user");
  }

  isAdmin() {
    let ok = false;
    if (this.roles) {
      for (const r of this.roles) {
        if (r.authority === "ADMIN") {
          ok = true;
        }
      }
    }

    return ok;
  }
}
