/// <reference path="../typings/browser.d.ts" />

import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";

import {GitHapp} from "./git-happ";

bootstrap(GitHapp, [
    HTTP_PROVIDERS
]);
