import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";
import { MAT_DIALOG_DATA } from "@angular/material";
import { UserForm } from "../../../../entites/user.entites";
import { UsersService } from "../../../../services/users.service";

@Component({
  selector: "app-edit-profil-dialog",
  templateUrl: "./edit-profil-dialog.component.html",
  styleUrls: ["./edit-profil-dialog.component.scss"]
})
export class EditProfilDialogComponent implements OnInit {
  private detailProfil: UserForm = new UserForm();
  private profilId;

  constructor(
    private userService: UsersService,
    private router: Router,
    private authservice: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.profilId = this.data.dataKey;
  }

  onSaveEditProfil(): void {}
}
