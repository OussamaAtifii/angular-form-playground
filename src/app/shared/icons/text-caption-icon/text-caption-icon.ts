import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-caption-icon',
  imports: [],
  templateUrl: './text-caption-icon.html',
})
export class TextCaptionIcon {
  class = input<string>('size-5');
}
