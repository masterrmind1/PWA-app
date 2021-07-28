import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { PwaServiceService } from './pwa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 updateAvailable=true;
 
 constructor(private pwaservice:PwaServiceService){
 }
 updateMe(){
   this.updateAvailable=this.pwaservice.promptEvent;
 }
 installPwa(): void {
  this.pwaservice.promptEvent.prompt();
}

}
