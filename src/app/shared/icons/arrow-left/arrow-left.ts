import { Component, input } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  imports: [],
  templateUrl: './arrow-left.html',
})
export class ArrowLeft {
  class = input<string>('size-5');
}
