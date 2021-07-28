import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

import { Information } from '../info.model';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // @Output() sendName=new EventEmitter<any[]>();
  // @Output() sendNumber=new EventEmitter<number>();

postArr:Information[]=[];
isFetching:boolean=false;
  constructor(private http:HttpClient, private firebase:FirebaseService,
    private router:Router,
    ) { }

  ngOnInit(): void {

  }
onPost(postData:Information){
  this.firebase.postData(postData.name,postData.mobile_number);
  this.isFetching=true;
  this.firebase.fetchData().subscribe(data=>{
    this.isFetching=false;
    this.postArr=data
  })
  // this.sendName.emit(this.postArr);
  // this.myDervice.myMethod(this.postArr)
  this.router.navigate(['./information'])

}
onDelet(){
  this.firebase.deletData().subscribe( ()=>
    this.postArr=[])

}
onBack(){
  this.router.navigate(['../']);
}

}
