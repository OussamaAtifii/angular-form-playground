import { Component, input } from '@angular/core';

@Component({
  selector: 'app-number-icon',
  imports: [],
  templateUrl: './number-icon.html',
})
export class NumberIcon {
  class = input<string>('size-5');
}
