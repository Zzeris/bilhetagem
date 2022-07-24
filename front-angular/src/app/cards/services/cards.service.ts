import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs';

import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private readonly API = '/assets/cards.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Card[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(cards => console.log(cards))
    );
  }
}
