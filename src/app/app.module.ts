import { ClientService } from './services/client/client.service';
import { UserAuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouter } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UserPageComponent } from './components/pages/user/user.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { InfoComponent } from './components/pages/info/info.component';
import { SupportComponent } from './components/pages/support/support.component';
import { AppStoreObj, AppEffectsList } from './store/store';
import { EffectsModule } from '@ngrx/effects';
import { UserHomeFragmentComponent } from './components/pages/user/user-home-fragment/user-home-fragment.component';
import { UserSettingsFragmentComponent } from './components/pages/user/user-settings-fragment/user-settings-fragment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent,
    SearchComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserPageComponent,
    FaqComponent,
    InfoComponent,
    SupportComponent,
    UserHomeFragmentComponent,
    UserSettingsFragmentComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(AppStoreObj),
    // EffectsModule.forRoot(AppEffectsList),
  ],
  providers: [
    UserAuthGuard,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
