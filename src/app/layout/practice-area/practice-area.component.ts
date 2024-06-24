import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-area',
  templateUrl: './practice-area.component.html',
  styleUrl: './practice-area.component.scss',
})
export class PracticeAreaComponent {
  cards = [
    {
      img: '/assets/images/labor.jpg',
      title: 'SPECIALTY.CARDS.LABOUR.TITLE',
      subtitle: 'SPECIALTY.CARDS.LABOUR.SUBTITLE',
    },
    {
      img: '/assets/images/criminal.jpg',
      title: 'SPECIALTY.CARDS.PENAL.TITLE',
      subtitle: 'SPECIALTY.CARDS.PENAL.SUBTITLE',
    },
    {
      img: '/assets/images/tax.jpg',
      title: 'SPECIALTY.CARDS.FISCAL.TITLE',
      subtitle: 'SPECIALTY.CARDS.FISCAL.SUBTITLE',
    },
    {
      img: '/assets/images/civil.jpg',
      title: 'SPECIALTY.CARDS.CIVIL.TITLE',
      subtitle: 'SPECIALTY.CARDS.CIVIL.SUBTITLE',
    },
    {
      img: '/assets/images/corporate.jpg',
      title: 'SPECIALTY.CARDS.CORPORATE.TITLE',
      subtitle: 'SPECIALTY.CARDS.CORPORATE.SUBTITLE',
    },
    {
      img: '/assets/images/family.png',
      title: 'SPECIALTY.CARDS.FAMILY.TITLE',
      subtitle: 'SPECIALTY.CARDS.FAMILY.SUBTITLE',
    },
  ];
}
