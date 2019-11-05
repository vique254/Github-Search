import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github-service/github.service';
import {Github} from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
	githubs:Github[];
	constructor(public githubService:GithubService) { }

	ngOnInit() {
		this.searchGithub('vique254');
	}
  searchGithub(arg0: string) {
    throw new Error("Method not implemented.");
  }

	// searchGithub(searchTerm: string){
	// this.githubService.searchGithubs(searchTerm).then(
	// 	()=>{
	// 		this.githubs=this.githubService.githubs;
	// 	},
	// 	(error: any)=>{
	// 		console.log(error)
	// 	}
	// )
	// }

}