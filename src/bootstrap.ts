import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";

import {GitHapp} from "./git-happ";

bootstrap(GitHapp, [
    HTTP_PROVIDERS
]);
