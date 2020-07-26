import { Routes } from "@angular/router";

import { ErrorOneComponent } from "./404/error-404.component";
import { ErrorTwoComponent } from "./503/error-503.component";

export const ErrorRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "404", component: ErrorOneComponent },
      { path: "503", component: ErrorTwoComponent }
    ]
  }
];
