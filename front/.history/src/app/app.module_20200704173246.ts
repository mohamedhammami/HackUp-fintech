import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RouterModule } from "@angular/router";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService } from "@ngx-translate/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { DemoMaterialModule } from "./shared/demo.module";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";

import { AppRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { SharedModule } from "./shared/shared.module";
import { UsersService } from "./services/users.service";
import { AuthService } from "./services/auth.service";
import { SharedService } from "./services/shared.service";
import { HttpErrorHandler } from "./services/error.handler";
import { ErrorModule } from "./error/error.module";
import { PopUpComponent } from "./error/popup/error.popup/error.popup.component";
import { CandidateService } from "./services/candidates.service";
import { StatService } from "./services/stat.service";
import { AccountService } from "./services/account.service";
import { AccountCongoService } from "./services/accountcongo.service";

import { AssuranceService } from "./services/assurance.service";
import { GenericService } from "./services/generic.service";



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCardModule,
    DemoMaterialModule,
    ErrorModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    FlexLayoutModule
  ],
  providers: [
    AuthService,
    UsersService,
    AssuranceService,
    StatService,
    ErrorHandler,
    HttpErrorHandler,
    GenericService,
    SharedService,
    CandidateService,
    TranslateService,
    AccountService,
    AccountCongoService
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [PopUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
