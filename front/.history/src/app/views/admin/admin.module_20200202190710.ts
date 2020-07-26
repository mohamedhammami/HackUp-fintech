import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultdemandeComponent } from './consultdemande/consultdemande.component';
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

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConsultdemandeComponent]
})
export class AdminModule { }
