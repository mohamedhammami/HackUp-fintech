import { Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersProfilComponent } from "./users-profil/users-profil.component";
import { UsersAdminComponent } from "./users-admin/users-admin.component";

export const UsersRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "list", component: UsersAdminComponent },
      { path: "users", component: UsersAdminComponent },
      { path: "profile", component: UsersProfilComponent }
    ]
  }
];
