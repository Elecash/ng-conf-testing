import {Component} from "angular2/core";
import {GithubCard} from "./components/gh-card";

@Component({
    selector: 'git-happ',
    template: `
        <label for="username">Search by username: </label>
        <input #username id="username" type="text" placeholder="Github username" (keyup.enter)="searchUser(username)">
        <gh-card [ghUser]="ghUser" *ngIf="ghUser"></gh-card>
    `,
    directives: [GithubCard]
})
export class GitHapp {
    ghUser:string;

    constructor() {}

    searchUser(input) {
        this.ghUser = input.value;
    }
}
