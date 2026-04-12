import { Component, input } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  imports: [],
  templateUrl: './trash-icon.html',
})
export class TrashIcon {
  class = input<string>('size-5');
}
