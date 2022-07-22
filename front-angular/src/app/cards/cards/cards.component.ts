import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Card } from './../model/card';
import { CardsService } from './../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards$: Observable<Card[]>;

  displayedColumns = ['name', 'type'];

  constructor(private cardsService: CardsService) {
    this.cards$ = this.cardsService.list();
  }

  ngOnInit(): void {
  }

}
