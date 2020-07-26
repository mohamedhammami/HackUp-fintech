import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { AppComponent } from "./app.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "users",
        loadChildren: "./views/users/users.module#UsersModule"
      },
      {
        path: "activities",
        loadChildren: "./views/activities/activity.module#ActivityModule"
      },
      {
        path: "electorals",
        loadChildren: "./views/electorals/electoral.module#ElectoralModule"
      },
      {
        path: "candidates",
        loadChildren: "./views/candidates/candidate.module#CandidateModule"
      },
      {
        path: "products",
        loadChildren: "./views/products/product.module#ProductModule"
      },
      {
        path: "assurance",
        loadChildren: "./views/assurance/assurance.module#AssuranceModule"
      },
      {
        path: "account",
        loadChildren: "./views/account/account.module#AccountModule"
      },
      {
        path: "admin",
        loadChildren: "./views/admin/admin.module#AdminModule"
      },
      {
        path: "credit",
        loadChildren: "./views/credit/credit.module#CreditModule"
      }
    ]
  },
  {
    path: "authentication",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./session/session.module#SessionModule"
      }
    ]
  },
  { path: "**", redirectTo: "session/404" }
];
