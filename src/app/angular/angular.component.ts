import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.alert').alert()
  }

}
