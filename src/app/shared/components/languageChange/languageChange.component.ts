import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageChangeService } from './languageChange.service';
import { LocalstorageService } from '../../services/localstorage';

@Component({
  selector: 'app-languageChange',
  templateUrl: './languageChange.component.html',
  styleUrls: ['./languageChange.component.css']
})
export class LanguageChangeComponent{
  
  private _languageService = inject(LanguageChangeService);
  
  constructor(private translate: TranslateService, localStorage: LocalstorageService) {
    translate.setDefaultLang('es');
    const lang = localStorage.getItem('language');
    if (lang) {
      this.useLanguage(lang);
    }
  }
  useLanguage(language: string): void {
    this.translate.use(language);
    this._languageService.toggleLangMode();
  }

}
