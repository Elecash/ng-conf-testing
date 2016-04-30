import {
    it,
    describe,
    expect,
    TestComponentBuilder,
    async,
    inject,
    setBaseTestProviders,
    beforeEachProviders,
    beforeEach
} from "angular2/testing";
import {Component, provide} from "angular2/core";
import {HTTP_PROVIDERS, XHRBackend, ResponseOptions, Response} from "angular2/http";
import {MockBackend, MockConnection} from "angular2/src/http/backends/mock_backend";
import {GithubCard} from "./gh-card";

@Component({
    template: '<gh-card ghUser="johnpapa"></gh-card>',
    directives: [GithubCard]
})
class TestGithubCard {}

describe('Github Card Tests', () => {
    var builder;

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend})
        ]
    });

    beforeEach(
        inject([XHRBackend, TestComponentBuilder], (backend, tcb) => {
            builder = tcb;

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
                }
            );
        })
    );

    it('Should create a GithubCard component',
        async(() => {
            builder.createAsync(TestGithubCard).then((fixture) => {
                fixture.detectChanges();

                let compiled = fixture.debugElement.nativeElement;
                let name = compiled.querySelector('.avatar strong');
                let username = compiled.querySelector('.avatar span');
                let list = compiled.querySelectorAll('.status li a strong');
                let repos = list[0];
                let gists = list[1];
                let followers = list[2];

                expect(name.innerHTML).toContain('John Papa');
                expect(username.innerHTML).toContain('@johnpapa');
                expect(repos.innerHTML).toContain('62');
                expect(gists.innerHTML).toContain('28');
                expect(followers.innerHTML).toContain('4.6K');
            });
        })
    );
});
