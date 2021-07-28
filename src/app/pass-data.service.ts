import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Information } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {
  myMethod$: Observable<any>;
  Arreyy:Information[];
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();

   }
   myMethod(data:Information[]) {
   this.Arreyy=data;
}

}
