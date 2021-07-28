import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../firebase.service';
import { Information } from '../info.model';

@Component({
  selector: 'app-names-display',
  templateUrl: './names-display.component.html',
  styleUrls: ['./names-display.component.css']
})
export class NamesDisplayComponent implements OnInit {
  isFetching = false;
  constructor(private http: HttpClient, private firebase: FirebaseService,
    private router:Router) { }
  postArr: Information[] = [];
  ngOnInit(): void {
    this.isFetching = true;

    this.http.get<{ [key: string]: Information }>('https://recipe-service-9a62b-default-rtdb.firebaseio.com/post.json')
      .pipe(map(dataa => {

        const postArrey: Information[] = [];
        for (const key in dataa) {

          if (dataa.hasOwnProperty(key)) {
            postArrey.push({ ...dataa[key] });
          }
        }
        return postArrey;
      })).subscribe(data => {
        this.isFetching = false;
        this.postArr = data;
      })
  }
  onDelet() {
    this.firebase.deletData().subscribe(() =>
      this.postArr = [])

  }
  gotoHome() {
    this.router.navigate(['./home'])

  }
  gotoAdd(){
    this.router.navigate(['./form'])

  }
}
