import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Inject} from '@angular/core';
import {GithubUser} from './gh-user';

export class GithubService {
    static GITHUB_API:string = 'https://api.github.com';
    static GITHUB_PARAMS:string = '?client_id=aaa27ad06049163bd846&client_secret=d478f87d9bdf95efa72015b77b26c5b6a17127a0';
    http:Http;
    user:GithubUser;

    constructor(@Inject(Http) http:Http) {
        this.http = http;
    }

    getUserByUsername(username:string):Observable<any> {
        let url:string = GithubService.GITHUB_API + '/users/' + username + GithubService.GITHUB_PARAMS;

        return this.http.get(url).map(response => response.json());
    }

    getRepository(repo:string):Observable<any> {
        let url:string = GithubService.GITHUB_API + '/repos/' + repo + GithubService.GITHUB_PARAMS;

        return this.http.get(url).map(response => response.json());
    }
}
