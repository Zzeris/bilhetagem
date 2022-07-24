import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { TypePipe } from './pipes/type.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    TypePipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    TypePipe
  ]
})
export class SharedModule { }
