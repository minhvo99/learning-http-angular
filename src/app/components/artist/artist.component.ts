import { Component, Input, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  
  public Artists:any[] = [];
  
  public TopSong: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getArtist().subscribe(item => {
      this.Artists = item;
    })
  }
  getTopSong(id: string){  
    this.spotifyService.getAlbums(id).subscribe(data => {
      this.TopSong = data.tracks;
      this.spotifyService.senAlbum(this.TopSong)
    })
  }
}
