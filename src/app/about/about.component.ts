import { Component } from '@angular/core';
import { KingScorerServiceService } from '../Services/king-scorer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private _kingScorerService:KingScorerServiceService,private activatedRoute:ActivatedRoute,private router:Router){

  }

  git(){
    let url="https://github.com/snimse7"
    window.open(url, '_blank');
  }
  resume(){
      let url="https://drive.google.com/file/d/1lvEbBmGcjy-37EHiynWsqZG3R8tU5_IM/view?usp=drive_link";
    window.open(url, '_blank');

  }
  
}
