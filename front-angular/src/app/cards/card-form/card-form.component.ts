import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CardsService } from './../services/cards.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private service: CardsService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      type: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => console.log(result),
      error => this.onError())
  }

  onCancel() {

  }

  private onError() {
    this.snackBar.open('Erro ao salvar cartão.', '', {duration: 3000})
  }

}
