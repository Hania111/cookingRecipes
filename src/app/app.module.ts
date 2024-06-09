import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterHeaderMenuLayoutComponent } from './Layouts/footer-header-menu-layout/footer-header-menu-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LikedMoviesComponent } from './pages/liked-movies/liked-movies.component';
import { ShakerComponent } from './pages/shaker/shaker.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './pages/register/register.component';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import {
  MsalModule,
  MsalRedirectComponent,
  MsalGuard,
  MsalService,
  MSAL_INSTANCE,
  MsalGuardConfiguration, MsalInterceptorConfiguration, MsalInterceptor
} from '@azure/msal-angular';
// import { msalConfig, loginRequest, protectedResources } from './auth-config';

function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: 'da3b43e0-080a-41f3-8eca-b625cfefe151',
      authority: 'https://yourrecipes.b2clogin.com/yourrecipes.onmicrosoft.com/B2C_1_signupsignin',
      redirectUri: 'http://localhost:4200/',
      knownAuthorities: ['yourrecipes.b2clogin.com']
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    }
  });
}

const guardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Redirect,
  authRequest: {
    scopes: ['https://yourrecipes.onmicrosoft.com/yourrecipes/api/recipedata.read',
      'https://yourrecipes.onmicrosoft.com/yourrecipes/api/recipedata.write']
  }
};

const interceptorConfig: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Redirect,
  protectedResourceMap: new Map([
    ['https://graph.microsoft.com/v1.0/me', ['User.Read']],
    ['https://yourrecipes.onmicrosoft.com/yourrecipes/api', ['recipedata.read', 'recipedata.write']]
  ])
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    HeaderComponent,
    FooterHeaderMenuLayoutComponent,
    HomeComponent,
    LikedMoviesComponent,
    ShakerComponent,
    FooterComponent,
    MenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MsalModule.forRoot(MSALInstanceFactory(), guardConfig, interceptorConfig)
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    MsalGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})

export class AppModule { }
