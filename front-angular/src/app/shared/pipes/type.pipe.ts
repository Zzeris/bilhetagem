import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case '1': return 'credit_card';
      case '2': return 'card_membership';
      case '3': return 'card_travel';
    }
    return 'credit_card';
  }

}
