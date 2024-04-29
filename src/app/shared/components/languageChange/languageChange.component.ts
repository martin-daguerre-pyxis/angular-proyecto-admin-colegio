import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languageChange',
  templateUrl: './languageChange.component.html',
  styleUrls: ['./languageChange.component.css']
})
export class LanguageChangeComponent{
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('en');
  }
  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }
}
