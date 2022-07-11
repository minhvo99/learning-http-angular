import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  public Album : any[] = []

  constructor(private spotifyService : SpotifyService){}

  
  ngOnInit(): void {
    this.spotifyService.getAlbum().subscribe((song : any)=> {
      this.Album = song;
    })   
  }
}
