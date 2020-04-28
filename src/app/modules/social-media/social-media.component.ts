import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService) { }


  ngOnInit() {

  }
  /**Signing with Google */
  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
/**Signing with Facebook */
  public signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
  }

  public gettingUserData(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

}
