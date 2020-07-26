import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { CreditDemandercreditComponent } from './credit-demandercredit/credit-demandercredit.component';
import { ListdemandeComponent } from './listdemande/listdemande.component';
import { SimulateurComponent } from './simulateur/simulateur.component';
import { DetaildeamndeComponent } from './detaildeamnde/detaildeamnde.component';
import { ModifierdemandeComponent } from './modifierdemande/modifierdemande.component';
import { SimulateurcreditComponent } from './simulateurcredit/simulateurcredit.component';
import { BoligatoireComponent } from './boligatoire/boligatoire.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { CameraComponent } from './camera/camera.component';
export const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      { path: "demandercredit", component: CreditDemandercreditComponent },
      { path: "list", component: ListdemandeComponent },
      { path: "simul", component: SimulateurComponent },
      { path: "detail/:id", component: DetaildeamndeComponent },
      { path: "modierdemande/:id", component: ModifierdemandeComponent },
      { path: "simul1", component: SimulateurcreditComponent },
      { path: "oblig", component: BoligatoireComponent },






      
       // { path: "show/:id", component: ElectoralShowComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
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
    ReactiveFormsModule
  ],
  declarations: [CreditDemandercreditComponent, ListdemandeComponent, SimulateurComponent, DetaildeamndeComponent, ModifierdemandeComponent, SimulateurcreditComponent, BoligatoireComponent, CameraComponent],
  entryComponents: []
})
export class CreditModule { }
