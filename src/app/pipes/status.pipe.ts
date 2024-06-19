import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value:number): string {

    const INVALID_VALUE = value === undefined || value === null || value > 3 || value < 1;

    if(INVALID_VALUE) {
      return 'Status Invalido'
    }

    const status = value === 1 ? 'Ativo' : 'Inativo';
    return status;
  }

}
