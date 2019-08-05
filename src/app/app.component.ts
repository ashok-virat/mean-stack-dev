import { Component,OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public router:ActivatedRoute,public route:Router){
  
  }
  ngOnInit(){

  }
  public navigate(){
    console.log('its called')
    this.route.navigate(['/angular'])
  }
}
