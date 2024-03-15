import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupSigninPageComponent } from './User/signup-signin-page/signup-signin-page.component';
import { HomePageComponent } from './Match/home-page/home-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Header/header/header.component';
import { NewMatchComponent } from './Match/new-match/new-match.component';
import { MatchComponent } from './Match/match/match.component';
import { RankingsComponent } from './CricketInfo/rankings/rankings.component';
import { CricInfoHomeComponent } from './CricketInfo/cric-info-home/cric-info-home.component';
import { PlayersInfoComponent } from './CricketInfo/players-info/players-info.component';
import { RecentMatchesComponent } from './CricketInfo/recent-matches/recent-matches.component';
import { MatchDescriptionComponent } from './CricketInfo/match-description/match-description.component';
import { PlayerDetailHomeComponent } from './CricketInfo/player-detail-home/player-detail-home.component';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { AppRoutingModule } from './app-routing.module';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  { path: 'playerById/:id', component: PlayersInfoComponent },
  { path: 'matchById', component: MatchDescriptionComponent },
  { path: 'playerInfo', component: PlayerDetailHomeComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'recentMatches', component: RecentMatchesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cric-info', component: CricInfoHomeComponent },





];
@NgModule({
  declarations: [
    AppComponent,
    SignupSigninPageComponent,
    HomePageComponent,
    HeaderComponent,
    NewMatchComponent,
    MatchComponent,
    RankingsComponent,
    CricInfoHomeComponent,
    PlayersInfoComponent,
    RecentMatchesComponent,
    MatchDescriptionComponent,
    PlayerDetailHomeComponent,
    HomeComponent,
    AboutComponent,

  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    [RouterModule.forRoot(routes)],
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
