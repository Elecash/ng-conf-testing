import {it, describe, expect, async, inject, beforeEachProviders, beforeEach} from "@angular/core/testing";
import {TestComponentBuilder} from '@angular/compiler/testing';
import {Component, provide} from "@angular/core";
import {HTTP_PROVIDERS, XHRBackend, ResponseOptions, Response} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {GithubRepo} from "./gh-repo";

@Component({
    template: '<gh-repo ghRepo="videogular/videogular"></gh-repo>',
    directives: [GithubRepo]
})
class TestGithubRepo {}

describe('Github Repo Tests', () => {
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
                            "id": 11823977,
                            "name": "videogular",
                            "full_name": "videogular/videogular",
                            "owner": {
                                "login": "videogular",
                                "id": 15369882,
                                "avatar_url": "https://avatars.githubusercontent.com/u/15369882?v=3",
                                "gravatar_id": "",
                                "url": "https://api.github.com/users/videogular",
                                "html_url": "https://github.com/videogular",
                                "followers_url": "https://api.github.com/users/videogular/followers",
                                "following_url": "https://api.github.com/users/videogular/following{/other_user}",
                                "gists_url": "https://api.github.com/users/videogular/gists{/gist_id}",
                                "starred_url": "https://api.github.com/users/videogular/starred{/owner}{/repo}",
                                "subscriptions_url": "https://api.github.com/users/videogular/subscriptions",
                                "organizations_url": "https://api.github.com/users/videogular/orgs",
                                "repos_url": "https://api.github.com/users/videogular/repos",
                                "events_url": "https://api.github.com/users/videogular/events{/privacy}",
                                "received_events_url": "https://api.github.com/users/videogular/received_events",
                                "type": "Organization",
                                "site_admin": false
                            },
                            "private": false,
                            "html_url": "https://github.com/videogular/videogular",
                            "description": "The HTML5 video player for AngularJS",
                            "fork": false,
                            "url": "https://api.github.com/repos/videogular/videogular",
                            "forks_url": "https://api.github.com/repos/videogular/videogular/forks",
                            "keys_url": "https://api.github.com/repos/videogular/videogular/keys{/key_id}",
                            "collaborators_url": "https://api.github.com/repos/videogular/videogular/collaborators{/collaborator}",
                            "teams_url": "https://api.github.com/repos/videogular/videogular/teams",
                            "hooks_url": "https://api.github.com/repos/videogular/videogular/hooks",
                            "issue_events_url": "https://api.github.com/repos/videogular/videogular/issues/events{/number}",
                            "events_url": "https://api.github.com/repos/videogular/videogular/events",
                            "assignees_url": "https://api.github.com/repos/videogular/videogular/assignees{/user}",
                            "branches_url": "https://api.github.com/repos/videogular/videogular/branches{/branch}",
                            "tags_url": "https://api.github.com/repos/videogular/videogular/tags",
                            "blobs_url": "https://api.github.com/repos/videogular/videogular/git/blobs{/sha}",
                            "git_tags_url": "https://api.github.com/repos/videogular/videogular/git/tags{/sha}",
                            "git_refs_url": "https://api.github.com/repos/videogular/videogular/git/refs{/sha}",
                            "trees_url": "https://api.github.com/repos/videogular/videogular/git/trees{/sha}",
                            "statuses_url": "https://api.github.com/repos/videogular/videogular/statuses/{sha}",
                            "languages_url": "https://api.github.com/repos/videogular/videogular/languages",
                            "stargazers_url": "https://api.github.com/repos/videogular/videogular/stargazers",
                            "contributors_url": "https://api.github.com/repos/videogular/videogular/contributors",
                            "subscribers_url": "https://api.github.com/repos/videogular/videogular/subscribers",
                            "subscription_url": "https://api.github.com/repos/videogular/videogular/subscription",
                            "commits_url": "https://api.github.com/repos/videogular/videogular/commits{/sha}",
                            "git_commits_url": "https://api.github.com/repos/videogular/videogular/git/commits{/sha}",
                            "comments_url": "https://api.github.com/repos/videogular/videogular/comments{/number}",
                            "issue_comment_url": "https://api.github.com/repos/videogular/videogular/issues/comments{/number}",
                            "contents_url": "https://api.github.com/repos/videogular/videogular/contents/{+path}",
                            "compare_url": "https://api.github.com/repos/videogular/videogular/compare/{base}...{head}",
                            "merges_url": "https://api.github.com/repos/videogular/videogular/merges",
                            "archive_url": "https://api.github.com/repos/videogular/videogular/{archive_format}{/ref}",
                            "downloads_url": "https://api.github.com/repos/videogular/videogular/downloads",
                            "issues_url": "https://api.github.com/repos/videogular/videogular/issues{/number}",
                            "pulls_url": "https://api.github.com/repos/videogular/videogular/pulls{/number}",
                            "milestones_url": "https://api.github.com/repos/videogular/videogular/milestones{/number}",
                            "notifications_url": "https://api.github.com/repos/videogular/videogular/notifications{?since,all,participating}",
                            "labels_url": "https://api.github.com/repos/videogular/videogular/labels{/name}",
                            "releases_url": "https://api.github.com/repos/videogular/videogular/releases{/id}",
                            "deployments_url": "https://api.github.com/repos/videogular/videogular/deployments",
                            "created_at": "2013-08-01T18:05:20Z",
                            "updated_at": "2016-04-29T01:33:33Z",
                            "pushed_at": "2016-04-21T23:45:13Z",
                            "git_url": "git://github.com/videogular/videogular.git",
                            "ssh_url": "git@github.com:videogular/videogular.git",
                            "clone_url": "https://github.com/videogular/videogular.git",
                            "svn_url": "https://github.com/videogular/videogular",
                            "homepage": "http://www.videogular.com/demo",
                            "size": 146733,
                            "stargazers_count": 1166,
                            "watchers_count": 1166,
                            "language": "JavaScript",
                            "has_issues": true,
                            "has_downloads": true,
                            "has_wiki": true,
                            "has_pages": false,
                            "forks_count": 286,
                            "mirror_url": null,
                            "open_issues_count": 20,
                            "forks": 286,
                            "open_issues": 20,
                            "watchers": 1166,
                            "default_branch": "master",
                            "organization": {
                                "login": "videogular",
                                "id": 15369882,
                                "avatar_url": "https://avatars.githubusercontent.com/u/15369882?v=3",
                                "gravatar_id": "",
                                "url": "https://api.github.com/users/videogular",
                                "html_url": "https://github.com/videogular",
                                "followers_url": "https://api.github.com/users/videogular/followers",
                                "following_url": "https://api.github.com/users/videogular/following{/other_user}",
                                "gists_url": "https://api.github.com/users/videogular/gists{/gist_id}",
                                "starred_url": "https://api.github.com/users/videogular/starred{/owner}{/repo}",
                                "subscriptions_url": "https://api.github.com/users/videogular/subscriptions",
                                "organizations_url": "https://api.github.com/users/videogular/orgs",
                                "repos_url": "https://api.github.com/users/videogular/repos",
                                "events_url": "https://api.github.com/users/videogular/events{/privacy}",
                                "received_events_url": "https://api.github.com/users/videogular/received_events",
                                "type": "Organization",
                                "site_admin": false
                            },
                            "network_count": 286,
                            "subscribers_count": 77
                        }
                    });

                    var response:Response = new Response(options);

                    connection.mockRespond(response);
                }
            );
        })
    );

    it('Should create a GithubRepo component',
        async(inject([TestComponentBuilder], (tcb) => {
            tcb.createAsync(TestGithubRepo).then((fixture) => {
                fixture.detectChanges();

                let compiled = fixture.debugElement.nativeElement;
                let name = compiled.querySelector('.header .name a');
                let language = compiled.querySelector('.header .name .language');
                let description = compiled.querySelector('.content p');
                let link = compiled.querySelector('.content p a');
                let stats = compiled.querySelectorAll('.footer .status strong');
                let forks = stats[0];
                let stars = stats[1];

                expect(name.innerHTML).toContain('videogular');
                expect(language.innerHTML).toContain('JavaScript');
                expect(description.innerHTML).toContain('The HTML5 video player for AngularJS');
                expect(link.innerHTML).toContain('http://www.videogular.com/demo');
                expect(forks.innerHTML).toContain('286');
                expect(stars.innerHTML).toContain('1166');
            });
        }))
    );
});
