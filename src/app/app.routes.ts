import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { SupportComponent } from './components/pages/support/support.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AboutComponent } from './components/pages/about/about.component';
import { InfoComponent } from './components/pages/info/info.component';
import { UserAuthGuard } from './guards/activators/user-auth.guard';
import { UserPageComponent } from './components/pages/user/user.component';
import { SignedOutGuard } from './guards/activators/signed-out.guard';
import { UserHomeFragmentComponent } from './components/pages/user/user-home-fragment/user-home-fragment.component';
import { UserSettingsFragmentComponent } from './components/pages/user/user-settings-fragment/user-settings-fragment.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  { path: 'welcome', pathMatch: 'full', component: WelcomeComponent },
  { path: 'signup', pathMatch: 'full', component: SignupComponent, canActivate: [SignedOutGuard] },
  { path: 'signin', pathMatch: 'full', component: SigninComponent, canActivate: [SignedOutGuard] },
  { path: 'search', pathMatch: 'full', component: SearchComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'info', pathMatch: 'full', component: InfoComponent },
  { path: 'faq', pathMatch: 'full', component: FaqComponent },
  { path: 'support', pathMatch: 'full', component: SupportComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
  {
    path: 'users/:id',
    component: UserPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserHomeFragmentComponent,
      },
      {
        path: 'settings',
        component: UserSettingsFragmentComponent,
        canActivate: [UserAuthGuard]
      }
    ]
  },
  // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRouter {}
