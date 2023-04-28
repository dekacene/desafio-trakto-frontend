import { Component, Input } from '@angular/core';

import { YouTubeClass } from '../../../../interfaces/mocks.interface';

@Component({
  selector: 'tk-youtube-card',
  templateUrl: './youtube-card.component.html',
  styleUrls: ['./youtube-card.component.scss'],
})
export class YoutubeCardComponent {
  @Input() video: YouTubeClass;

  imgsPath = 'assets/icons/youtube-card';
}
