import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
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
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatNativeDateModule,
  MatSliderModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CandidateListComponent } from "./candidate-list/candidate-list.component";
import { CandidateEditComponent } from "./candidate-edit/candidate-edit.component";
import { CandidateCreateComponent } from "./candidate-create/candidate-create.component";
import { CandidateInfoComponent } from "./candidate-info/candidate-info.component";
export const routes: Routes = [
  {
    path: "",
    children: [
      { path: "list", component: CandidateListComponent },
      { path: "show/:id", component: CandidateInfoComponent },
      { path: "edit/:id", component: CandidateEditComponent },
      { path: "add", component: CandidateCreateComponent }
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
    MatMenuModule,
    MatInputModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  declarations: [
    CandidateListComponent,
    CandidateEditComponent,
    CandidateCreateComponent,
    CandidateInfoComponent
  ],
  entryComponents: []
})
export class CandidateModule {}
