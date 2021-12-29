import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import Swal from 'sweetalert2';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';
import { TeamComponent } from './components/team/team.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HipervinculoComponent } from './components/hipervinculo/hipervinculo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardHeroeComponent } from './components/card-heroe/card-heroe.component';
import { PillTextComponent } from './components/pill-text/pill-text.component';
import { CookieService } from './services/cookies.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'team', component: TeamComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    Page404Component,
    TeamComponent,
    HeroesComponent,
    HipervinculoComponent,
    CardHeroeComponent,
    PillTextComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
