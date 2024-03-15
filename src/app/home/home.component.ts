import { Component } from '@angular/core';
import { KingScorerServiceService } from '../Services/king-scorer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _kingScorerService:KingScorerServiceService,private activatedRoute:ActivatedRoute,private router:Router){

  }
}
