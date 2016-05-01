import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Inject} from '@angular/core';
import {GithubUser} from './gh-user';

export class GithubService {
    static GITHUB_API:string = 'https://api.github.com';
    http:Http;
    user:GithubUser;

    constructor(@Inject(Http) http:Http) {
        this.http = http;
    }

    getUserByUsername(username:string):Observable<any> {
        let url:string = GithubService.GITHUB_API + '/users/' + username;

        return this.http.get(url).map(response => response.json());
    }

    getRepository(repo:string):Observable<any> {
        let url:string = GithubService.GITHUB_API + '/repos/' + repo;

        return this.http.get(url).map(response => response.json());
    }
}
