import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { UsersService } from "app/services/users.service";
import { AuthService } from "../../../services/auth.service";
import { UserModel } from "../../../models/user.model";

export interface UserData {
  id: number;
  nom: string;
  prenom: string;
  cin: string;
  email: string;
  birth_date: Date;
  points: number;
  active: number;
}

@Component({
  selector: "app-users-admin",
  templateUrl: "./users-admin.component.html",
  styleUrls: ["./users-admin.component.scss"]
})
export class UsersAdminComponent implements OnInit {
  displayedColumns: string[] = ["id", "firstname", "lastname", "email", "role"];
  dataSource: MatTableDataSource<UserModel>;

  users: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private authService: AuthService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.loadData();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async loadData() {
    try {
      const result: any = await this.authService.getUsers();
      console.log({ result });
      if (result) {
        this.users = result;
        this.dataSource.data = this.users;
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
