import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../../services/users.service";
import { AuthService } from "../../../services/auth.service";
import { UserForm } from "../../../entites/user.entites";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { EditProfilDialogComponent } from "./edit-profil-dialog/edit-profil-dialog.component";

@Component({
  selector: "app-users-profil",
  templateUrl: "./users-profil.component.html",
  styleUrls: ["./users-profil.component.scss"]
})
export class UsersProfilComponent implements OnInit {
  private myprofile: UserForm = new UserForm();
  private currentuseremail = null;
  private nbMesSnd;
  private nbRepoSnd;
  private nbTotalSndResp;
  public urlimageuser = "API_URL_SPRING_IMAGE_USER";
  public imageURL = "API_URL_SPRING_USER" + "/getImageProfile/";

  constructor(
    private userservice: UsersService,
    private authservice: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  dataLoad() {}

  ngOnInit() {
    this.currentuseremail = this.authservice.emailcurrentuser;
    this.dataLoad();
  }

  openEditProfilDialog(id) {
    const dialogRef = this.dialog.open(EditProfilDialogComponent, {
      width: "550px",
      data: {
        dataKey: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        this.dataLoad();
      } else {
        console.log("cancel edit");
      }
    });
  }
}
