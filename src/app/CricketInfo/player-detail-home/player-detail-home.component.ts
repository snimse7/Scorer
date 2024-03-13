import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KingScorerServiceService } from 'src/app/Services/king-scorer-service.service';

@Component({
  selector: 'app-player-detail-home',
  templateUrl: './player-detail-home.component.html',
  styleUrls: ['./player-detail-home.component.css']
})
export class PlayerDetailHomeComponent {

  constructor(private _kingScorerService:KingScorerServiceService,
    private router: Router){

  }
  ngOnInit(){
    this._kingScorerService.getTrendingPlayers().subscribe(
      (data)=>{
        this.data=data;
        //alert(this.rankings[0].name);
      },
      (error) => {
        window.alert("API Call Limit might have been exceeded please try again tommorrow");
      }
    );
  }
  search="";
  playerDetails(id:number){
    this.router.navigate(['playerById',id]);
  }
  data:any;
  searchByName(){
    this._kingScorerService.serchPlayerByName(this.search).subscribe(
      (data)=>{
        this.data=data;
        //alert(this.rankings[0].name);
      },
      (error) => {
        window.alert(error.message);
      }
    );
  }
}
