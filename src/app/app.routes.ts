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

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', pathMatch: 'full', component: WelcomeComponent },
    { path: 'signup', pathMatch: 'full', component: SignupComponent },
    { path: 'signin', pathMatch: 'full', component: SigninComponent },
    { path: 'search', pathMatch: 'full', component: SearchComponent },
    { path: 'about', pathMatch: 'full', component: AboutComponent },
    { path: 'info', pathMatch: 'full', component: InfoComponent },
    { path: 'faq', pathMatch: 'full', component: FaqComponent },
    { path: 'support', pathMatch: 'full', component: SupportComponent },
    { path: 'contact', pathMatch: 'full', component: ContactComponent },
    { path: 'home', pathMatch: 'full', component: HomeComponent, canActivate: [UserAuthGuard] },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRouter {}
