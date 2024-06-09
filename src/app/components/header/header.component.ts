import { Component } from '@angular/core';
import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private msalService: MsalService) { }
  logout() {
    this.msalService.logoutRedirect();
  }
}
