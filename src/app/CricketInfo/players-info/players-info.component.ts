import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KingScorerServiceService } from 'src/app/Services/king-scorer-service.service';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent {
  bowling:any;
  battingStats:any;
  constructor(private _kingScorerService:KingScorerServiceService,private activatedRoute:ActivatedRoute,private router:Router){

  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(paramsData=>{
      let id=paramsData['id'];
      let playerId:number=id;
      //id=1413;
      this._kingScorerService.getPlayerDetailsById(playerId).subscribe(
        (data)=>{
          this.playerInfo=data;
          //alert(this.rankings[0].name);
        },
        (error) => {
          window.alert(error.message);
        }
      );

      this._kingScorerService.getBattingInfoById(playerId).subscribe(
        (data)=>{
          this.battingStats=data;
          //alert(this.rankings[0].name);
        },
        (error) => {
          window.alert(error.message);
        }
      );

      this._kingScorerService.getBattingInfoById(playerId).subscribe(
        (data)=>{
          this.bowling=data;
          //alert(this.rankings[0].name);
        },
        (error) => {
          window.alert(error.message);
        }
      );



    });
      
  }
  playerInfo:any;
  search="";
  cars=true;
  details=false;

    

    

    

    open(){
      this.cars=false;
      this.details=true;
    }
    back(){
      this.cars=true;
      this.details=false;
    }

    
  
}
