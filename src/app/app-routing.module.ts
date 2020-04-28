import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialMediaComponent } from './modules/social-media/social-media.component';


const routes: Routes = [
  { path: '', component: SocialMediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
