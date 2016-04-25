import {Component} from "angular2/core";
import {GithubCard} from "./components/gh-card";
import {GithubRepo} from "./components/gh-repo";

@Component({
    selector: 'git-happ',
    template: `
        <label for="username">Search by username: </label>
        <input #username id="username" type="text" placeholder="username" (keyup.enter)="searchUser(username)">
        <gh-card [ghUser]="ghUser" *ngIf="ghUser"></gh-card>
        <br>
        <label for="repo">Search by repository: </label>
        <input #repo id="repo" type="text" placeholder="username/repository" (keyup.enter)="searchRepo(repo)">
        <gh-repo [ghRepo]="ghRepo" *ngIf="ghRepo"></gh-repo>
    `,
    directives: [GithubCard, GithubRepo]
})
export class GitHapp {
    ghUser:string;
    ghRepo:string;

    constructor() {}

    searchUser(input) {
        this.ghUser = input.value;
    }

    searchRepo(input) {
        this.ghRepo = input.value;
    }
}
