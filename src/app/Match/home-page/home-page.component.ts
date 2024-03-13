import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Input() data:any;

  constructor(){
    console.log(this.data);
  }
  matchesList:any[]=["s","s","d","o","q","l"];
}
