import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }
}
