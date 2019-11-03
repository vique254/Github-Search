import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { GithubService } from '../github-service/github.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github:Github;
githubService:any;
  constructor() {
   }

  ngOnInit() {
  }

}
