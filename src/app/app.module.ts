import { ClientService } from './services/client.service';
import { UserAuthGuard } from './guards/activators/user-auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouter } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UserComponent } from './components/pages/user/user.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { InfoComponent } from './components/pages/info/info.component';
import { SupportComponent } from './components/pages/support/support.component';


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
    UserComponent,
    FaqComponent,
    InfoComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: userReducer
    })
  ],
  providers: [
    UserAuthGuard,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
