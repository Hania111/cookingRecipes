import { Component } from '@angular/core';
import {MsalService} from "@azure/msal-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private msalService: MsalService, private router: Router) { }

  login() {
    this.msalService.loginRedirect();
  }
}
