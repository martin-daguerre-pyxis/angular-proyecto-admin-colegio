import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule, SharedModule],
    declarations: [
        ComingSoonComponent,
    ],
    exports: [
        ComingSoonComponent,
    ]
})
export class ComingSoonModule {

}
