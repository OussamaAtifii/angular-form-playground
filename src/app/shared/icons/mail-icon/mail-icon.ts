import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mail-icon',
  imports: [],
  templateUrl: './mail-icon.html',
})
export class MailIcon {
  class = input<string>('size-5');
}
