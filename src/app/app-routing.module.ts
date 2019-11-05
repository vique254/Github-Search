import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
// import {NotFoundComponent} from './not-found/not-found.component';
// import {AboutComponent} from './about/about.component'


const  routes:  Routes  = [
  {"path":"home","component":ProfileComponent},
  {"pathMatch":"full","redirectTo":"home","path":"" },
  // {path:"about",component :AboutComponent},
  // {"path":"**","component":NotFoundComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }