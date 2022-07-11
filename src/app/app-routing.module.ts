import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from './components/artist/artist.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
 {
   path: ":search",
   component: ArtistComponent,
   children: [
     {
       path: ":id",
       component: ArtistDetailComponent
     }
   ]
 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
