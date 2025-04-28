import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'substring',
    standalone:true,
  })
export class SubstringPipe implements PipeTransform{
  transform(value:string,start:number,end:number): any {
    if (!value) return '';
    return value.substring(start, end);
  }
}
