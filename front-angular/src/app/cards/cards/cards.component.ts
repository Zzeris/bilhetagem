import { Component, OnInit } from '@angular/core';

import { Card } from './../model/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [
    { _id: "1", name: "Comum", type:"1" },
    { _id: "2", name: "Estudante", type:"2" },
    { _id: "3", name: "Trabalhador", type:"3" }
  ];

  displayedColumns = ['name', 'type'];

  constructor() { }

  ngOnInit(): void {
  }

}
