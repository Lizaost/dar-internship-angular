import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:
    'concatField'
})

export class ConcatPipe implements PipeTransform {

  transform(value: any, ...fields): string {
    const res = [];
    fields.forEach(field => {
      if (value[field] !== undefined){
        res.push(`${field}: ${value[field]}`);
      }
    });
    return res.join(', ');
  }

}
