import {Component, Input, OnChanges} from "angular2/core";
import {GithubRepository} from "../services/gh-repository";
import {Thousands} from "../pipes/thousands";
import {GithubService} from "../services/gh-service";
import "rxjs/add/operator/map";

@Component({
    selector: 'gh-repo',
    template: `
        <span>{{ loadingMessage }}</span>
        <div class="github-card repo-card" *ngIf="repo">
            <div class="header">
                <a class="avatar" [href]="repo.owner.html_url">
                    <img [src]="repo.owner.avatar_url + '&s=48'">
                </a>
                <strong class="name">
                    <a [href]="repo.html_url">{{ repo.name }}</a>
                    <sup class="language">{{ repo.language }}</sup>
                </strong>
                <span>Created by <a [href]="repo.owner.html_url">{{ repo.owner.login }}</a></span>
                <a class="button" [href]="repo.html_url">Star</a>
            </div>
            
            <div class="content">
                <p>{{ repo.description }} - <a [href]="repo.homepage">{{ repo.homepage }}</a></p>
            </div>
            
            <div class="footer">
                <span class="status">
                    <strong>{{ repo.forks_count }}</strong> Forks
                </span>
                
                <span class="status">
                    <strong>{{ repo.watchers_count }}</strong> Stars
                </span>
            </div>
        </div>
    `,
    styles: [`
        :host {
            display: block;
            max-width: 400px;
            padding: 0;
            margin: 0;
            font-size: 14px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            overflow: hidden;
            border: 1px solid #eee;
            border-radius: 5px;
            border-color: #eee #ddd #bbb;
            box-shadow: rgba(0, 0, 0, 0.14) 0 1px 3px;
        }
        
        .github-card {
            border-radius: 5px;
            padding: 8px 8px 0;
            background: #fff;
            color: #555;
            position: relative;
        }
        
        .github-card a {
            text-decoration: none;
            color: #4183c4;
            outline: 0;
        }
        .github-card a:hover {
            text-decoration: underline;
        }
        
        .github-card .header {
            position: relative;
        }
        
        .github-card .button {
            position: absolute;
            top: 0;
            right: 0;
            padding: 4px 8px 4px 7px;
            color: #555;
            text-shadow: 0 1px 0 #fff;
            border: 1px solid #d4d4d4;
            border-radius: 3px;
            font-size: 13px;
            font-weight: bold;
            line-height: 14px;
            background-color: #e6e6e6;
            background-image: -webkit-linear-gradient(#fafafa, #eaeaea);
            background-image: -moz-linear-gradient(#fafafa, #eaeaea);
            background-image: -ms-linear-gradient(#fafafa, #eaeaea);
            background-image: linear-gradient(#fafafa, #eaeaea);
        }
        
        .github-card .button:hover {
            color: #fff;
            text-decoration: none;
            background-color: #3072b3;
            background-image: -webkit-linear-gradient(#599bdc, #3072b3);
            background-image: -moz-linear-gradient(#599bdc, #3072b3);
            background-image: -ms-linear-gradient(#599bdc, #3072b3);
            background-image: linear-gradient(#599bdc, #3072b3);
            border-color: #518cc6 #518cc6 #2a65a0;
            text-shadow: 0 -1px 0 rgba(0,0,0,.25);
        }
        
        /* repo card */
        .repo-card .header {
            padding: 3px 0 4px 57px;
        }
        .repo-card .avatar, .repo-card .avatar img {
            position: absolute;
            top: 0;
            left: 0;
            width: 48px;
            height: 48px;
            background: #fff;
            border-radius: 4px;
        }
        .repo-card .header a {
            color: #707070;
        }
        .repo-card .header a:hover {
            color: #FFF;
        }
        .repo-card .header strong {
            display: block;
            font-size: 18px;
            line-height: 1.4;
        }
        .repo-card .header strong a {
            color: #292f33;
        }
        .repo-card .header sup {
            font-size: 10px;
            margin-left: 3px;
            color: #797979;
        }
        .repo-card .content {
            padding: 6px 0 10px;
        }
        .repo-card .content p {
            margin: 0 5px 0 0;
            font: 18px/24px Georgia, "Times New Roman", Palatino, serif;
            overflow: hidden;
            clear: both;
            word-wrap: break-word;
        }
        .repo-card .footer {
            border-top: 1px solid #eee;
            padding: 8px 0 6px;
        }
        .repo-card .status {
            font-size: 10px;
            padding-right: 10px;
            text-transform: uppercase;
        }
        .repo-card .status strong {
            font-size: 12px;
            padding-right: 5px;
        }
    `],
    providers: [GithubService],
    pipes: [Thousands]
})
export class GithubRepo implements OnChanges {
    @Input() ghRepo:string;

    repo:GithubRepository;
    loadingMessage:string = '';

    constructor(public service:GithubService) {}

    ngOnChanges(changeRecord) {
        if (changeRecord.ghRepo.currentValue) {
            this.searchRepo(changeRecord.ghRepo.currentValue);
        }
    }

    searchRepo(repo:string) {
        this.loadingMessage = 'loading repository...';

        this.service.getRepository(repo)
            .subscribe(
                this.onLoadRepo.bind(this),
                this.onLoadRepoError.bind(this)
            );
    }

    onLoadRepo(repo) {
        this.loadingMessage = '';
        this.repo = repo;
    }

    onLoadRepoError(repo) {
        this.loadingMessage = "Repository doesn't exist";
        this.repo = null;
    }
}
