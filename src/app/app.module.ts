import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http'
import { FrontPageComponent } from './front-page/front-page.component';
import {  RouterModule} from '@angular/router';
import { RouteMeRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { NamesDisplayComponent } from './names-display/names-display.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FrontPageComponent,
    NamesDisplayComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,MatButtonModule,
    MatCardModule,MatFormFieldModule,HttpClientModule,
    RouterModule,RouteMeRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
     
    //   registrationStrategy: 'registerWhenStable:30000'
    // })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
