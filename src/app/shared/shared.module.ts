import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ThemeChangeComponent } from './components/themeChange/themeChange.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsComponent } from './components/icons/icons.component';
import { LocalstorageService } from './services/localstorage/localstorage.service';

@NgModule({
  declarations: [
    ToolbarComponent,
    ThemeChangeComponent,
    NavbarComponent,
    FooterComponent,
    IconsComponent,
    FormFieldValidationErrorsPipe
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  providers: [LocalstorageService],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormFieldValidationErrorsPipe,
    ToolbarComponent,
    ThemeChangeComponent,
    NavbarComponent,
    FooterComponent,
    IconsComponent,
  ],
})
export class SharedModule {}
