import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-key-icon',
  imports: [],
  templateUrl: './user-key-icon.html',
})
export class UserKeyIcon {
  class = input<string>('size-5');
}
