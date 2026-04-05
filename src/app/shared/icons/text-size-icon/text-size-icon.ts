import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-size-icon',
  imports: [],
  templateUrl: './text-size-icon.html',
})
export class TextSizeIcon {
  class = input<string>('size-5');
}
