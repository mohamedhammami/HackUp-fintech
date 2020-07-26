import { Component, OnInit } from "@angular/core";
import { UserForm } from "../../../entites/user.entites";
import { UsersService } from "../../../services/users.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  private lalistusers = [];

  constructor(
    private userservice: UsersService,
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit() {}
}
