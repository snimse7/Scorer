import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/Model/models';
import { Match, UpdateBatsManInput } from 'src/Model/Match';


@Injectable({
  providedIn: 'root'
})
export class KingScorerServiceService {

  constructor(private http:HttpClient) { }

  private readonly baseurl="https://localhost:7292/"

  //User Services
  checkUserPresent(userName:string):Observable<any>{
    let url=this.baseurl+"CheckUserPresentOrNot?userName="+userName;
    return this.http.get(url);
  }
  signInUser(userName:string,passWord:string):Observable<any>{
    let url=this.baseurl+"SignIn?userName="+userName+"&passWord="+passWord;
    return this.http.get(url);
  }

  signUpUser(user:User):Observable<any>{
    let url=this.baseurl+"NewUserRegistration";
    return this.http.post(url,user);
  }


  //Match Services
  newMatch(match:Match):Observable<any>{
    let url=this.baseurl+"NewMatch";
    return this.http.post(url,match);
  }
  getMatch(matchId:string):Observable<any>{
    let url=this.baseurl+"api/Match/GetMatchDetails?matchId="+matchId;
    return this.http.get(url);
  }
  getBatsmanList(matchId:string,inning:string):Observable<any>{
    let url=this.baseurl+"api/Match/BattingList?matchId="+matchId+"&inning="+inning;
    return this.http.get(url);
  }
  getBowlerList(matchId:string,inning:string):Observable<any>{
    let url=this.baseurl+"api/Match/BowlingList?matchId="+matchId+"&inning="+inning;
    return this.http.get(url);
  }
  getBatsmanById(matchId:string,inning:string,playerId:string){
    let url=this.baseurl+"api/Match/getBatsmanById?matchId="+matchId+"&inning="+inning+"&playerId="+playerId;
    return this.http.get(url);
  }
  getBowlerById(matchId:string,inning:string,playerId:string){
    let url=this.baseurl+"api/Match/getBowlerById?matchId="+matchId+"&inning="+inning+"&playerId="+playerId;
    return this.http.get(url);
  }

  updateBatsMan(updateBatsManInput:UpdateBatsManInput){
    //let url=this.baseurl+"api/Match/UpdateBatsMan";
    let url="https://localhost:7292/api/Match/UpdateBatsMan";
    return this.http.post(url,updateBatsManInput);
  }
  updateBowler(updateBowlerInput:any){
    let url=this.baseurl+"api/Match/UpdateBowler";
    return this.http.post(url,updateBowlerInput);
  }


  //Services for CRICINFO
  getRankings(formatType:string,category:string):Observable<any>{
    let url='https://localhost:7292/api/CricInfo/Ranking?formatType='+formatType+'&category='+category;
    return this.http.get(url);
  }
  serchPlayerByName(name:string):Observable<any>{
    let url="https://localhost:7292/api/CricInfo/searchPlayerByName?name="+name;
    return this.http.get(url);
  }
  getRecentMatches():Observable<any>{
    let url="https://localhost:7292/api/CricInfo/getRecentMatches";
    return this.http.get(url);
  }
  getScoreCardByMatchId(matchId:number):Observable<any>{
    let url="https://localhost:7292/api/CricInfo/getScoreCardById?matchId="+matchId;
    return this.http.get(url);
  }
  getTrendingPlayers():Observable<any>{
    let url="https://localhost:7292/api/CricInfo/getTrendingPlayers";
    return this.http.get(url);
  }
  getPlayerDetailsById(playerId:number):Observable<any>{
    let url ="https://localhost:7292/api/CricInfo/getPlayerInfoById?playerId="+playerId;
    return this.http.get(url);
  }

  getBowlingInfoById(playerId:number):Observable<any>{
    let url ="https://localhost:7292/api/CricInfo/getBowlingInfoById?playerId="+playerId;
    return this.http.get(url);
  }
  getBattingInfoById(playerId:number):Observable<any>{
    let url ="https://localhost:7292/api/CricInfo/getBattingInfoById?playerId="+playerId;
    return this.http.get(url);
  }
}
