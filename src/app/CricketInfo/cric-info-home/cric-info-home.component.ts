import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cric-info-home',
  templateUrl: './cric-info-home.component.html',
  styleUrls: ['./cric-info-home.component.css']
})
export class CricInfoHomeComponent {

  constructor(private router: Router){
    
  }
  player(){
    this.router.navigate(['playerInfo']);
  }
  rankings(){
    this.router.navigate(['rankings']);

  }
  recentMatches(){
    this.router.navigate(['recentMatches']);

  }
}
