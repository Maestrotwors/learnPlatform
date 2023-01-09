import { RemoteEntryComponent } from './entry.component';
import { Route } from '@angular/router';
import { routes } from './student-routing.module';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent, children: routes },
];