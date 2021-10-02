import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';
import { TeamComponent } from './components/team/team.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'team', component: TeamComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'faqs', component: HomeComponent},
  {path: 'about', component: HomeComponent},
  {path: '**', component: Page404Component},
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    Page404Component,
    TeamComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
