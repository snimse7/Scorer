import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Model/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user?:User;
  constructor(private activatedRoute:ActivatedRoute,private router:Router){
    console.log("user"+this.user?.userName);
  }

  home(){
    this.router.navigate(['rankings']);
  }
}
