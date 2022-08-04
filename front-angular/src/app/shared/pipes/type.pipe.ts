import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'comum': return 'credit_card';
      case 'estudante': return 'card_membership';
      case 'trabalhador': return 'card_travel';
    }
    return 'credit_card_off';
  }

}
