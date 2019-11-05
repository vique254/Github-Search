import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService }from './profile-service/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import{DateCountPipe} from './date-count.pipe'

// import {  GithubFormComponent} from './github-form/github-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DateCountPipe,
    // GithubFormComponent,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }