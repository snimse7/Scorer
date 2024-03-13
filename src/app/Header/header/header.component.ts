import { Component, Input } from '@angular/core';
import { User } from 'src/Model/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user?:User;
  constructor(){
    console.log("user"+this.user?.userName);
  }

}
