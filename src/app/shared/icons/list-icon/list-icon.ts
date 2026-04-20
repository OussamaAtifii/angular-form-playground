import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-icon',
  imports: [],
  templateUrl: './list-icon.html',
})
export class ListIcon {
  class = input<string>('size-5');
}
