import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { DateCountPipe } from './date-count.pipe';
import{AboutComponent} from './about/about.component';
import{GithubService} from './github-service/github.service'

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    NotFoundComponent,
    GithubFormComponent,
    DateCountPipe,
    AboutComponent,
    GithubService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavbarComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }