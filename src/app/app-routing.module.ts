import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NamesDisplayComponent } from './names-display/names-display.component';

const routes: Routes = [
    { path: "", component: FrontPageComponent},
  {  path:'form', component: FormsComponent},
  { path:'home', component:FrontPageComponent},
  {path:'information', component:NamesDisplayComponent},
  { path: "**", redirectTo: '/home' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteMeRoutingModule { }
export const routingComponents = [FrontPageComponent, FormsComponent]
