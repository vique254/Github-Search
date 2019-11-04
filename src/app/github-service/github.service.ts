 
import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import {Github} from '../github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  githubs:Github[]=[];
  constructor(private http:HttpClient) { }

  searchGithubs(searchTerm:string){
    
    let searchEndpoint= "https://api.github.com/v1/git/search?api_key="+environment.GITHUBAPIKEY;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.githubs=[];
            for(let i=0; i<results["data"].length; i++){
              let url = results["data"][i]["images"]["fixed_height"]["url"];
              let github = new Github(url);
              this.githubs.push(github);
            }
            console.log(this.githubs);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}
