import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'numerical'})
export class NumericalPipe implements PipeTransform {
  transform(value: number) {
    if(value == 1) {
        return '1st';
    }
    if(value == 2) {
        return '2nd';
    }
    if(value == 3) {
        return '3rd'
    }
    return value + 'th';
  }
}