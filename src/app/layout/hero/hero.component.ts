import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor() {}

  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.activeRoute.fragment.subscribe((data) => {
      console.log(data);
      this.JumpToSection(data);
    });
  }

  JumpToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  }
}
