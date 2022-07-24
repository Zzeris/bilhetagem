import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
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

  constructor(
    private cardsService: CardsService,
    public dialog: MatDialog
    ) {
    this.cards$ = this.cardsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar Cartões.')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

}
