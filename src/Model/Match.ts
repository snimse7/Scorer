export class Batsman {
    
    playerId:string
    name: string;
    battingPosition:number;
    status:string;
    runs: number;
    bowls:number;
    fours: number;
    six:number;
    strike_rate:number;
    type:string
    currentPlayer:boolean;
    onStrike:boolean;
    outBy?:string;
    outType?:string;
    constructor() {
      this.playerId="";
      this.name = "";
      this.battingPosition=0;
      this.status="yet to Bat";
      this.runs = 0;
      this.fours = 0;
      this.six = 0;
      this.strike_rate = 0.0;
      this.bowls = 0;
      this.type="";
      this.currentPlayer=false;
      this.onStrike=false;
    }
}

export class Bowling{
  playerId:string
  name: string;
  runs: number;
  maidenOvers: number;
  wickets:number;
  economy:number;
  overs:number;
  balls:number;
  currentBowler:boolean;
  constructor() {
    this.playerId=""
    this.name = "";
    this.runs = 0;
    this.maidenOvers = 0;
    this.wickets = 0;
    this.economy = 0.0;
    this.overs=0;
    this.balls=0;
    this.currentBowler=false;
  }

}

export class Match{
  matchId: string;
  team1: string;
  team2: string;
  ground:string;
  toss:string;
  chooseTo:string;
  date:Date;
  overs:number;
  inning1:Inning;
  inning2:Inning;
  constructor() {
    this.matchId = "";
    this.team1 = "";
    this.team2 = "";
    this.ground = "";
    this.toss = "";
    this.chooseTo="";
    this.date=new Date;
    this.overs=0;
    this.inning1=new Inning();
    this.inning2=new Inning();
  }

}


export class Inning{
    teamname:string;
    runs:number;
    overs:number;
    balls:number;
    runRate:number;
    wickets:number;
    extras:Extras;
    battingInning:Batsman[];
    bowlingInning:Bowling[];
    constructor(){
      this.teamname="";
      this.runs=0;
      this.overs=0;
      this.balls=0;
      this.runRate=0;
      this.wickets=0;
      this.extras=new Extras();
      this.battingInning=[];
      this.bowlingInning=[];
      
    }
}

export class Ball{
  matchId:string;
  inning:string;
  runs:number;
  legalDelievery:boolean;
  batsman:Batsman;
  // batsman2:Batsman;
  bowler:Bowling;
  six:boolean;
  four:boolean;
  wide:boolean;
  noBall:boolean;
  byes:boolean;
  penalty:boolean;
  constructor(){
    this.matchId="";
    this.inning="";
    this.runs=0;
    this.legalDelievery=true;
    this.batsman=new Batsman();
    // this.batsman2=new Batsman();
    this.bowler=new Bowling();
    this.six=false;
    this.four=false;
    this.wide=false;
    this.noBall=false;
    this.byes=false;
    this.penalty=false;
  }
}

export class Wicket{
  outPlayerId:string;
  outType:string;
  outBy:string;
  runsAddedInBall:number;
  constructor(){
    this.outPlayerId="";
    this.outBy="";
    this.outType="";
    this.runsAddedInBall=0;
  }
}

export class Extras{
  noBall:number;
  legByes:number;
  byes:number;
  wides:number;
  constructor(){
    this.noBall=0;
    this.legByes=0;
    this.wides=0;
    this.byes=0;
  }
}

export class UpdateBatsManInput{
    matchId:string;
    inning:string;
    batsman:Batsman;
    constructor(){
        this.matchId="";
        this.inning="";
        this.batsman=new Batsman();
    }
}