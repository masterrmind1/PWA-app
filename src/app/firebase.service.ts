import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from './info.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private http:HttpClient) { }
  postData(name:string, mobile_number:number){
    const infoData:Information={name:name, mobile_number:mobile_number}
    this.http.post<{name:string, mobile_number:number}>('https://recipe-service-9a62b-default-rtdb.firebaseio.com/post.json', infoData)
    .subscribe(data=>{
      console.log(data)
    })
  }

  fetchData(){
      return  this.http.get< {[key:string]:Information}>('https://recipe-service-9a62b-default-rtdb.firebaseio.com/post.json')
       .pipe(map(dataa=>{
        const postArrey:Information[]=[];
        for (const key in dataa){
          if (dataa.hasOwnProperty(key)){
            postArrey.push({ ...dataa[key] , about:key });
          }
        } 
        return postArrey;
      }))
       
  };
  deletData(){
    return this.http.delete('https://recipe-service-9a62b-default-rtdb.firebaseio.com/post.json').pipe(
      tap(event=>{
        console.log(event)
      })
    )

  }
}
