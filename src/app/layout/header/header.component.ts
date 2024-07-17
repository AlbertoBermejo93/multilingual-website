import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [TranslateModule],
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    // Load the saved language from localStorage when the application initializes
    const savedLanguage = localStorage.getItem('appLanguage');
    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      // Set the default language if no language is saved in localStorage
      this.translate.setDefaultLang('en');
      localStorage.setItem('appLanguage', 'en');
    }
  }

  switchToEnglish() {
    this.translate.use('en');
    localStorage.setItem('appLanguage', 'en');
  }

  switchToSpanish() {
    this.translate.use('es');
    localStorage.setItem('appLanguage', 'es');
  }

  switchToFrench() {
    this.translate.use('fr');
    localStorage.setItem('appLanguage', 'fr');
  }
}
