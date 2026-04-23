import { Component, input } from '@angular/core';

@Component({
  selector: 'app-external-link',
  imports: [],
  templateUrl: './external-link.html',
})
export class ExternalLink {
  class = input<string>('size-5');
}
