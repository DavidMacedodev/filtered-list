import { Pipe, PipeTransform } from '@angular/core';
import { OperationsResponse } from '../types/Operations-response.type';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list:  any[] | null, searchProp: string,  searchValue: string): any[] {
     if(!list) {
      console.log('nulo')
      return [];
     }
    if(list.length === 0 || !searchValue)   {
    return list;
   }


   return list.filter((item) => item[searchProp].toLowerCase().includes(searchValue.toLowerCase()))
  }


}
