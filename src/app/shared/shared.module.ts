import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ThemeChangeComponent } from './components/themeChange/themeChange.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsComponent } from './components/icons/icons.component';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { RouterModule } from '@angular/router';
import { ToggleNavService } from './services/toggle-nav.service';
import { LoadingComponent } from './components/loading/loading.component';
import { NavAccountComponent } from './components/nav-account/nav-account.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageChangeModule } from './components/languageChange/language-change.module';
import { LanguageChangeComponent } from './components/languageChange/languageChange.component';
import { PipesModule } from './pipes/pipes.module';
@NgModule({
  declarations: [
    ThemeChangeComponent,
    NavbarComponent,
    FooterComponent,
    IconsComponent,
    FormFieldValidationErrorsPipe,
    LoadingComponent,
    NavAccountComponent
  ],
  imports: [
    CommonModule, 
    TranslateModule, 
    DatePipe, 
    MaterialModule, 
    ReactiveFormsModule, 
    RouterModule, 
    LanguageChangeModule,
    PipesModule
  ],
  providers: [LocalstorageService, ToggleNavService],
  exports: [
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
    FormFieldValidationErrorsPipe,
    ThemeChangeComponent,
    NavbarComponent,
    FooterComponent,
    IconsComponent,
    LoadingComponent,
    NavAccountComponent,
    LanguageChangeComponent,
    PipesModule
  ],
})
export class SharedModule {}
