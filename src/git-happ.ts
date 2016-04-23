/// <reference path="../typings/browser.d.ts" />

import {Component} from "angular2/core";
import 'rxjs/add/operator/map';

import {GithubCard} from "./components/gh-card";
import {GithubService} from "./services/gh-service";
import {GithubUser} from "./services/gh-user";

@Component({
    selector: 'git-happ',
    template: `
        <input #username type="text" placeholder="Github username" (keyup.enter)="searchUser(username.value)"> <span>{{ loadingMessage }}</span>
        <gh-card [ghUser]="ghUser" *ngIf="ghUser"></gh-card>
    `,
    providers: [GithubService],
    directives: [GithubCard]
})
export class GitHapp {
    ghUser:GithubUser;
    loadingMessage:string = '';

    constructor(public service:GithubService) {}

    searchUser(username:string) {
        this.loadingMessage = 'loading user...';

        this.service.getUserByUsername(username)
            .subscribe(
                this.onLoadUser.bind(this),
                this.onLoadUserError.bind(this)
            );
    }

    onLoadUser(user) {
        this.loadingMessage = '';
        this.ghUser = user;
    }

    onLoadUserError(user) {
        this.loadingMessage = "User doesn't exist";
        this.ghUser = null;
    }
}
