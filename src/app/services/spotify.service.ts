import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  public artists = new Subject<any>();

  public topSong = new Subject<any>();

  constructor( private http : HttpClient){
    
  }


  public tokenSearch = `Bearer BQBWgLUz4KYg-556GbCceNH58vMmAvQzox2_6SYlb6CotR1i4QjRmHzO2d2YNv0qUic18xYiMbUkEtYjxYEF2xNtYXP8rfWcA2fvaaLbfRn7-fsaHBLLVCL3jAXQBjhFbPFZWcYy_FlWSNS_CV-BktqjZav-qo3WFu-DOZk5GZ1JzXYeHmnf5bMm7Nj4IaBdvIXfOWqy5Q`
  
  public searchOptions = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": this.tokenSearch
    })
  }

  public tokenTrackSong = `Bearer BQCKrgUdzfoLO-IvdVfu6BbqCu_uf-w4gvlRtZMVm7R1H3ydbqq9IpF6clja9AtMPK5BJKiPXEL8Dk4_jKS31vFM4kxzP-QForHQempS6_G0n15RZyG4dAHuc5VpRGRSQDryjPTfswG9c3z7FxRaKrEXwjSp6YMjf7r9I4o3UjL_gb1vW71L0aiIX1c7hPIu1ndGUlXovw`

  public getTopTrack = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": this.tokenTrackSong
    })
  }

  getArtists(searchQuery:string): Observable<any>{
    let URL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&market=US`
    return this.http.get<any>(URL, this.searchOptions);
  }


  sendArtists(data: any){
    this.artists.next(data);
  }

  getArtist(){
    return this.artists.asObservable();
  }

  getAlbums(id : string) :Observable<any>{
    let URL = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`;
    return this.http.get<any>(URL, this.getTopTrack)
  }
  senAlbum(data : any){
    this.topSong.next(data);
  }
  getAlbum(){
    return this.topSong.asObservable();   
  }
  
  
}
