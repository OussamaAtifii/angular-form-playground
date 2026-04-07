import { Component, input } from '@angular/core';

@Component({
  selector: 'app-player-play-icon',
  imports: [],
  templateUrl: './player-play-icon.html',
})
export class PlayerPlayIcon {
  class = input<string>('size-5');
}
