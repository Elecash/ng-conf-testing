import {it, describe, expect, async, inject, beforeEachProviders} from "@angular/testing";
import {provide} from "@angular/core";
import {HTTP_PROVIDERS, XHRBackend, ResponseOptions, Response} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {GithubService} from "./gh-service";

describe('Github Service Tests', () => {
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            GithubService
        ]
    });

    it('Should get a user by username',
        async(inject([XHRBackend, GithubService], (backend, service) => {
            backend.connections.subscribe(
                (connection:MockConnection) => {
                    var options = new ResponseOptions({
                        body: {
                            "login": "johnpapa",
                            "id": 1202528,
                            "avatar_url": "https://avatars.githubusercontent.com/u/1202528?v=3",
                            "gravatar_id": "",
                            "url": "https://api.github.com/users/johnpapa",
                            "html_url": "https://github.com/johnpapa",
                            "followers_url": "https://api.github.com/users/johnpapa/followers",
                            "following_url": "https://api.github.com/users/johnpapa/following{/other_user}",
                            "gists_url": "https://api.github.com/users/johnpapa/gists{/gist_id}",
                            "starred_url": "https://api.github.com/users/johnpapa/starred{/owner}{/repo}",
                            "subscriptions_url": "https://api.github.com/users/johnpapa/subscriptions",
                            "organizations_url": "https://api.github.com/users/johnpapa/orgs",
                            "repos_url": "https://api.github.com/users/johnpapa/repos",
                            "events_url": "https://api.github.com/users/johnpapa/events{/privacy}",
                            "received_events_url": "https://api.github.com/users/johnpapa/received_events",
                            "type": "User",
                            "site_admin": false,
                            "name": "John Papa",
                            "company": "JohnPapa.net, LLC",
                            "blog": "http://johnpapa.net",
                            "location": "Orlando, FL",
                            "email": null,
                            "hireable": null,
                            "bio": null,
                            "public_repos": 62,
                            "public_gists": 28,
                            "followers": 4612,
                            "following": 0,
                            "created_at": "2011-11-17T17:05:03Z",
                            "updated_at": "2016-04-03T09:51:44Z"
                        }
                    });

                    var response:Response = new Response(options);

                    connection.mockRespond(response);
                });

            service.getUserByUsername('johnpapa').subscribe((user) => {
                expect(user.name).toBe('John Papa');
                expect(user.login).toBe('johnpapa');
                expect(user.public_repos).toBe(62);
                expect(user.public_gists).toBe(28);
                expect(user.followers).toBe(4612);
            });
        }))
    );
});
