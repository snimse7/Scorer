import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Batsman, Bowling, Match, UpdateBatsManInput } from 'src/Model/Match';
import { KingScorerServiceService } from 'src/app/Services/king-scorer-service.service';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent {
  //variable for options of overs from 1-50
  overs: number[] = Array.from({ length: 50 }, (_, i) => i + 1);

  //variables to control the screens
  playerListDiv:boolean=false;
  details:boolean=true;
  select:boolean=false;

  //variable for macth details
  match:Match=new Match();
  matchId:string="aa86b7d0-aa27-450c-8223-3b18a3963b55";

  //variable to store names of the two teams
  team1players: any[] = [];

  //variables for batsmanList and BowlerList
  batsManList:Batsman[]=[];
  bowlerList:Bowling[]=[];

  //variables of strike and non strike batsman and bowler
  onStrikeBatter:Batsman=new Batsman();
  nonStrikeBatter:Batsman=new Batsman();
  bowler:Bowling=new Bowling();

  //formgroup for basic details
  form=new FormGroup({
    team1: new FormControl('', Validators.required),
    team2: new FormControl('', Validators.required),
    toss: new FormControl('', Validators.required),
    chooseTo: new FormControl('', Validators.required),
    overs: new FormControl(null, Validators.required),
    ground: new FormControl('', Validators.required),
  })

  //formgroup for the initial batsmans and bowler
  selectPlayersForm=new FormGroup({
    on_StrikeBatsMan:new FormControl(null,Validators.required),
    Non_StrikeBatsMan:new FormControl(null,Validators.required),
    bowler:new FormControl(null,Validators.required)
  })

  onstrike?:Batsman;

  

  constructor(private fb: FormBuilder,private _kingScorerService:KingScorerServiceService) {
    //initialize array with size 11 for players
    for (let i = 0; i < 12; i++) {
      let batsman=new Batsman();
      batsman.name=""
      this.team1players.push({team1name:'',team2name:''});
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      team1: ['', Validators.required],
      team2: ['', Validators.required],
      toss: ['', Validators.required],
      chooseTo: ['', Validators.required],
      overs: [null, Validators.required],
      ground: ['', Validators.required],
    });

    this.selectPlayersForm=this.fb.group({
      on_StrikeBatsMan:new FormControl(null,Validators.required),
      Non_StrikeBatsMan:new FormControl(null,Validators.required),
      bowler:new FormControl(null,Validators.required)
    })
  }


  batsmanMatchValidator(g: FormGroup) {
  return g.get('on_StrikeBatsMan')?.value !== g.get('Non_StrikeBatsMan')?.value
      ? null : {'sameBatsman': true};
  }
 
  playerListFun(){
    this.details=false;
    this.playerListDiv=true;

    this.match.team1=this.form.get('team1')?.value || '';
    this.match.team2=this.form.get('team2')?.value || '';
    this.match.toss=this.form.get('toss')?.value || '';
    this.match.chooseTo=this.form.get('chooseTo')?.value || '';
    this.match.overs=this.form.get('overs')?.value || 0;
    this.match.ground=this.form.get('ground')?.value || '';
    console.log(this.match);
  }

  async selectPlayer(){
    this.playerListDiv=false;
    this.select=true;

    for(let i=0;i<11;i++){
      let batsman1:Batsman=new Batsman();
      let batsman2:Batsman=new Batsman();
      let bowler1:Bowling=new Bowling();
      let bowler2:Bowling=new Bowling();

      batsman1.name=this.team1players[i].team1name;
      batsman2.name=this.team1players[i].team2name;
      bowler1.name=this.team1players[i].team2name;
      bowler2.name=this.team1players[i].team1name;

      this.match.inning1.battingInning.push(batsman1);
      this.match.inning2.battingInning.push(batsman1);
      this.match.inning1.bowlingInning.push(bowler1);
      this.match.inning2.bowlingInning.push(bowler2);
    }
    console.log(this.match);

    this._kingScorerService.newMatch(this.match).subscribe(
      (data) => {
        //this.matchId=data.id;
        alert(data.message);
        console.log(this.matchId);
    
        let inning="inning1";
        this._kingScorerService.getBatsmanList(this.matchId,inning).subscribe(
          (data) => {
            this.batsManList=data;
          },
          (error) => {
            window.alert(error.message);
          }
        );
        this._kingScorerService.getBowlerList(this.matchId,inning).subscribe(
          (data) => {
            this.bowlerList=data;
          },
          (error) => {
            window.alert(error.message);
          }
        );
      },
      (error) => {
        window.alert(error.message);
      }
    );    
  }

  startMatch(){
    var onstrike=this.selectPlayersForm.get('on_StrikeBatsMan')?.value || new Batsman;
    var nonstrike=this.selectPlayersForm.get('Non_StrikeBatsMan')?.value || new Batsman;
    var bowler=this.selectPlayersForm.get('bowler')?.value|| new Bowling;

    // onstrike.currentPlayer=true;
    // onstrike.onStrike=true;
    // onstrike.battingPosition=1;
    let updateBatsManInput=new UpdateBatsManInput;
    updateBatsManInput.matchId=this.matchId;
    updateBatsManInput.inning="inning1";
    updateBatsManInput.batsman=onstrike;
    
    // nonstrike.currentPlayer=true;
    // nonstrike.battingPosition=2;
    let updateBatsManInput1={
      matchId:this.matchId,
      inning:"inning1",
      batsman:this.onstrike
    }

    console.log(onstrike.name);
    //bowler.currentBowler=true;
    let updateBowlerInput={
      matchId:this.matchId,
      inning:"inning1",
      bowler:bowler
    }

    this._kingScorerService.updateBatsMan(updateBatsManInput).subscribe(
      (data)=>{
        alert("successfully updates")
      },
      (error) => {
        window.alert(error.message);
      }
    );
    this._kingScorerService.updateBatsMan(updateBatsManInput).subscribe(
      (data)=>{
        alert("successfully updates")
      },
      (error) => {
        window.alert(error.message);
      }
    );
    this._kingScorerService.updateBowler(updateBowlerInput).subscribe(
      (data)=>{
        alert("successfully updates")
      },
      (error) => {
        window.alert(error.message);
      }
    );
  }

  submitForm() {
  }

  onSubmit() {
  }
}
