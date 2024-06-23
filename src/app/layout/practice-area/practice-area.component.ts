import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-area',
  templateUrl: './practice-area.component.html',
  styleUrl: './practice-area.component.scss',
})
export class PracticeAreaComponent {
  cards = [
    {
      img: 'SPECIALTY.CARDS.LABOUR.IMG.SOURCE',
      title: 'SPECIALTY.CARDS.LABOUR.TITLE',
      subtitle: 'SPECIALTY.CARDS.LABOUR.SUBTITLE',
    },
    {
      img: 'SPECIALTY.CARDS.PENAL.IMG.SOURCE',
      title: 'SPECIALTY.CARDS.PENAL.TITLE',
      subtitle: 'SPECIALTY.CARDS.PENAL.SUBTITLE',
    },
    {
      img: 'SPECIALTY.CARDS.FISCAL.IMG.SOURCE',
      title: 'SPECIALTY.CARDS.FISCAL.TITLE',
      subtitle: 'SPECIALTY.CARDS.FISCAL.SUBTITLE',
    },
    {
      img: 'SPECIALTY.CARDS.CIVIL.IMG.SOURCE',
      title: 'SPECIALTY.CARDS.CIVIL.TITLE',
      subtitle: 'SPECIALTY.CARDS.CIVIL.SUBTITLE',
    },
    {
      img: 'SPECIALTY.CARDS.CORPORATE.IMG.SOURCE',
      title: 'SPECIALTY.CARDS.CORPORATE.TITLE',
      subtitle: 'SPECIALTY.CARDS.CORPORATE.SUBTITLE',
    },
    {
      img: 'SPECIALTY.CARDS.FAMILY.IMG.SOURCE',
      title: 'SPECIALTY.CARDS.FAMILY.TITLE',
      subtitle: 'SPECIALTY.CARDS.FAMILY.SUBTITLE',
    },
  ];
}
