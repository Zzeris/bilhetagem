import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      type: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value)
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Cartão salvo com sucesso!', '', {duration: 3000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar cartão.', '', {duration: 3000});
  }

}
