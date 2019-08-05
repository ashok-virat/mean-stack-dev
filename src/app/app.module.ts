import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularComponent } from './angular/angular.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    HomeComponent,
    ExpressjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,pathMatch:'full'},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'angular',component:AngularComponent},
      {path:'expressjs',component:ExpressjsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
