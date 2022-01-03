import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterTitleCase',
})
export class FirstLetterTitleCasePipe implements PipeTransform {
  transform(value: string): string {
    let rest = [...value.split('-').join(' ')];
    rest[0] = rest[0].toUpperCase();
    return rest.join('');
  }
}
