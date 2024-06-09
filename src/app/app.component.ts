import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService} from "@azure/msal-angular";
import {filter, Subject, takeUntil} from "rxjs";
import {InteractionStatus, RedirectRequest} from "@azure/msal-browser";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'moviematch';
  isUserLoggedIn: boolean = false;
  private readonly destroy= new Subject<void>();

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig:MsalGuardConfiguration,
              private msalBroadCastService: MsalBroadcastService,
              private authService:MsalService,
              private router: Router)
  {

  }
  ngOnInit(): void {
    this.msalBroadCastService.inProgress$.pipe(
      filter((interactionStatus:InteractionStatus)=>
      interactionStatus == InteractionStatus.None),
      takeUntil(this.destroy))
      .subscribe(x=>
      {
        this.isUserLoggedIn=this.authService.instance.getAllAccounts().length>0
      });
    this.authService.handleRedirectObservable().subscribe({
      next: (result) => {
        if (result !== null && result.account !== null) {
          this.authService.instance.setActiveAccount(result.account);
          this.router.navigate(['/home']); // Redirect to /home after login
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnDestroy() {
    this.destroy.next(undefined);
    this.destroy.complete();
  }

  login() {
    if(this.msalGuardConfig.authRequest)
    {
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest)
    }
    else
    {
      this.authService.loginRedirect();
    }
  }
  logout() {
    this.authService.logoutRedirect({postLogoutRedirectUri:environment.postLogoutRedirectUri});
  }
}
