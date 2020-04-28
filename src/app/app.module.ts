import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { SocialMediaModule } from './modules/social-media/social-media.module';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './modules/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialMediaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
