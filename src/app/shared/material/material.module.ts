import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from '@angular/material/dialog';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';

// CDK
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DialogModule } from '@angular/cdk/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkListboxModule } from '@angular/cdk/listbox';


const modules = [
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatSelectModule,
  MatFormFieldModule,
  // Dialog
  MatDialogModule,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions,
  // List
  MatListModule,
  MatTable,
  MatSliderModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  // CDK
  DialogModule,
  CdkAccordionModule,
  DragDropModule,
  LayoutModule,
  CdkListboxModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialModule { }
