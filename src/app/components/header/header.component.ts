import {Component, Input} from '@angular/core';
import {MsalService} from "@azure/msal-angular";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private msalService: MsalService) { }
  logout() {
    this.msalService.logoutRedirect({postLogoutRedirectUri: environment.postLogoutRedirectUri});
  }
}
