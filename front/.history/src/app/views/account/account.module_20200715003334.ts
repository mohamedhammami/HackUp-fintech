import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  MatIconModule,
  MatSortModule,
  MatGridListModule,
  MatListModule,
  MatPaginatorModule,
  MatCardModule,
  MatDialogModule,
  MatSidenavModule,
  MatTabsModule,
  MatMenuModule,
  MatInputModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatDatepickerModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountAddaccountComponent } from './account-addaccount/account-addaccount.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountListaccountbancaireComponent } from './account-listaccountbancaire/account-listaccountbancaire.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddacounttitreComponent } from './addacounttitre/addacounttitre.component';
import { AccountListaccounttitreComponent } from './account-listaccounttitre/account-listaccounttitre.component';
import { DetailcomptetitreComponent } from './detailcomptetitre/detailcomptetitre.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
export const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      { path: "create", component: AccountCreateComponent },
      { path: "createcontact", component: CreatecontactComponent },

      { path: "addaccounttitre", component: AddacounttitreComponent },
      { path: "addaccount", component: AccountAddaccountComponent },
      { path: "listacount", component: AccountListComponent },
      { path: "listecomptebancaire", component: AccountListaccountbancaireComponent },
      { path: "listecomptetitre", component: AccountListaccounttitreComponent },
      { path: "virement", component: TransactionsComponent },
      { path: "detail/:id", component: DetailcomptetitreComponent },



     // { path: "show/:id", component: ElectoralShowComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSortModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatInputModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    
  ],
  declarations: [AccountCreateComponent, AccountAddaccountComponent, AccountListComponent, AccountListaccountbancaireComponent, TransactionsComponent, AddacounttitreComponent, AccountListaccounttitreComponent, DetailcomptetitreComponent
    , CreatecontactComponent],
  entryComponents: []
})
export class AccountModule {}
