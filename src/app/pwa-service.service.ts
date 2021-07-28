import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {
  isUpdate=true;
  update:boolean;
  promptEvent;
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if (this.isUpdate) {
        window.location.reload();
     
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
});
  }

}
