import { Component } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { InformationComponent } from './layout/information/information.component';
import { ContactComponent } from './layout/contact/contact.component';
import { AboutComponent } from './layout/about/about.component';
import { ServicesComponent } from './layout/services/services.component';
import { PracticeAreaComponent } from './layout/practice-area/practice-area.component';
import { HeroComponent } from './layout/hero/hero.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [
        HeaderComponent,
        HeroComponent,
        PracticeAreaComponent,
        ServicesComponent,
        AboutComponent,
        ContactComponent,
        InformationComponent,
        FooterComponent,
    ],
})
export class AppComponent {}
