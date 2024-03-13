import { Component } from '@angular/core';
import { KingScorerServiceService } from 'src/app/Services/king-scorer-service.service';

@Component({
  selector: 'app-recent-matches',
  templateUrl: './recent-matches.component.html',
  styleUrls: ['./recent-matches.component.css']
})
export class RecentMatchesComponent {
  recentMathes:any[]=[];
  matches:any[]=[];
  constructor(private _kingScorerService:KingScorerServiceService){

  }
  async ngOnInit(){
    
      await this._kingScorerService.getRecentMatches().subscribe(
        (data)=>{
          this.recentMathes=data.typeMatches[0].seriesMatches;
          this.recentMathes.splice(1,1);

          for(let i=0;i<this.recentMathes.length;i++){
              for(let j=0;j<this.recentMathes[i].seriesAdWrapper.matches.length;j++){
                this.matches.push(this.recentMathes[i].seriesAdWrapper.matches[j]);
              }
          }

        },
        (error) => {
          window.alert(error.message);
        }
      );

      
  }

}
