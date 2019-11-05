import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repos } from '../repos';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;
  repos: Repos;
  urlheader = 'https://api.github.com/users/';
  repoheader = 'https://api.github.com/users/';
  apitoken = '?access_token=' + environment.apiUrl;
  constructor(private http: HttpClient) { }
  getUser(search: string) {
    interface mydata {
      created_at: any;
      avatar_url: any;
      followers_url: any;
      following_url: any;
      repos_url: any;
      login: any;
      public_repos: any;
    }
    return new Promise((resolve, reject) => {
      this.http.get<mydata>(this.urlheader + search + this.apitoken).toPromise().then(
        (_result) => {
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepo(search: string) {
    interface Myrepo {
        created_at: any;
        avatar_url: any;
        followers_url: any;
        following_url: any;
        repos_url: any;
        login: any;
        public_repos: any;
      id: string;
      name: string;
      html_url: string;
      description: string;
    }
    return new Promise((resolve, reject) => {
      this.http.get<Myrepo>(this.repoheader + search + '/repos?' + this.apitoken).toPromise().then(
        (result) => {
          this.repos = result;
          resolve();
        },
        (_error) => {
          reject();
        }
      );
    });
  }
}