import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'spitString'})
export class SpitStringPipe implements PipeTransform {
  transform(value: string) {
    return value.split(':')[1];
  }
}