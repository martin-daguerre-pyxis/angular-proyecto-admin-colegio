import {
  Injectable,
  OnDestroy,
} from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { LocalstorageService } from '../../services/localstorage';

@Injectable({
  providedIn: 'root',
})

export class LanguageChangeService implements OnDestroy {

  private _language$ = new ReplaySubject<'es' | 'en'>(1);
  public language$ = this._language$.asObservable();
  private _destroyed$ = new Subject<void>();
  constructor(localStorage: LocalstorageService) {
    this.syncLanguageFromLocalStorage();
    this.toggleClassOnLanguageChanges();
  }

  private syncLanguageFromLocalStorage(): void {
    this._language$.next(
      localStorage.getItem('language') === 'es' ? 'en' : 'es'
    );
  }

  private toggleClassOnLanguageChanges(): void {
    this.language$.pipe(takeUntil(this._destroyed$)).subscribe((language) => {
      if (language === 'en') {
        localStorage.setItem('language', 'es');
      } else {
        localStorage.setItem('language', 'en');
      }
    });
  }

  public toggleLangMode(): void {
    const newLanguage =
      localStorage.getItem('language') === 'es' ? 'en' : 'es';
    localStorage.setItem('language', newLanguage);
    this._language$.next(newLanguage);
  }

  // E. Clean up our subscriptions when the service gets destroyed
  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
