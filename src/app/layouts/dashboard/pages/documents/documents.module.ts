import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { CoreModule } from '../../../../core/core.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ComingSoonModule } from '../../components/coming-soon/coming-soon.module';


@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ComingSoonModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
