import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'landing',
    loadChildren: () =>
      import('landing/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('teacher/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('student/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('landing/Module').then((m) => m.RemoteEntryModule),
  },
];
