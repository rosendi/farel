import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';

import { App } from './todo'

bootstrap(App, [ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
]);