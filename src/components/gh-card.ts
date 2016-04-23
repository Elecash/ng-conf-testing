import {Component, Input} from "angular2/core";
import {GithubUser} from "../services/gh-user";
import {Thousands} from "../pipes/thousands";

@Component({
    selector: 'gh-card',
    template: `
        <div class="github-card user-card">
            <div class="header">
                <a class="avatar" [href]="ghUser.html_url">
                    <img [src]="ghUser.avatar_url + '&s=48'">
                    <strong>{{ ghUser.name }}</strong>
                    <span>@{{ ghUser.login }}</span>
                </a>
                <a class="button" [href]="ghUser.html_url">Follow</a>
            </div>
            
            <ul class="status">
                <li>
                    <a [href]="'https://github.com/' + ghUser.login + '?tab=repositories'">
                        <strong>{{ ghUser.public_repos | thousands }}</strong>Repos
                    </a>
                </li>
                <li>
                    <a [href]="'https://gist.github.com/' + ghUser.login">
                        <strong>{{ ghUser.public_gists | thousands }}</strong>Gists
                    </a>
                </li>
                <li>
                    <a [href]="'https://github.com/' + ghUser.login + '/followers'">
                        <strong>{{ ghUser.followers | thousands }}</strong>Followers
                    </a>
                </li>
            </ul>
            
            <div class="footer" *ngIf="ghUser.hireable">
                <a [href]="'mailto:' + ghUser.email">Available for hire.</a>
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
        
        /* user card */
        .user-card .header {
            padding: 3px 0 4px 57px;
            min-height: 48px;
        }
        
        .user-card .header a {
            text-decoration: none;
        }
        
        .user-card .header a:hover strong {
            text-decoration: underline;
        }
        
        .user-card img {
            position: absolute;
            top: 0;
            left: 0;
            width: 48px;
            height: 48px;
            background: #fff;
            border-radius: 4px;
        }
        
        .user-card strong {
            display: block;
            color: #292f33;
            font-size: 16px;
            line-height: 1.6;
        }
        
        .user-card ul {
            text-transform: uppercase;
            font-size: 12px;
            color: #707070;
            list-style-type: none;
            margin: 0;
            padding: 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            zoom: 1;
        }
        
        .user-card ul:after {
            display: block;
            content: '';
            clear: both;
        }
        
        .user-card .status a {
            color: #707070;
            text-decoration: none;
        }
        
        .user-card .status a:hover {
            color: #4183c4;
        }
        
        .user-card .status li {
            float: left;
            padding: 4px 18px;
            border-left: 1px solid #eee;
        }
        
        .user-card .status li:first-child {
            border-left: 0;
            padding-left: 0;
        }
        
        .user-card .footer {
            font-size: 12px;
            font-weight: 700;
            padding: 11px 0 10px;
            color: #646464;
        }
        
        .user-card .footer a {
            color: #646464;
        }
    `],
    pipes: [Thousands]
})
export class GithubCard {
    @Input() ghUser:GithubUser;

    constructor() {}
}
