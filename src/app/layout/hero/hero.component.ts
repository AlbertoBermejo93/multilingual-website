import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    standalone: true,
    imports: [TranslateModule],
})
export class HeroComponent {
  constructor() {}
}
