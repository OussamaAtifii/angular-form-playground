import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chevron-down-icon',
  imports: [],
  templateUrl: './chevron-down-icon.html',
})
export class ChevronDownIcon {
  class = input<string>('size-5');
}
