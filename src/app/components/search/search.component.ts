import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists:any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    
  }
  search(searchQuery :string){
    this.spotifyService.getArtists(searchQuery).subscribe(item => {
      this.artists = item.artists.items; 
      this.spotifyService.sendArtists(this.artists);
    })
  }
}
