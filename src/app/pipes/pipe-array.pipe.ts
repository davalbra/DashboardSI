import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeArray',
})
export class PipeArrayPipe implements PipeTransform {
  transform(value: number): number[] {
    return Array.from({ length: value }, (_, i) => i);
  }
}
