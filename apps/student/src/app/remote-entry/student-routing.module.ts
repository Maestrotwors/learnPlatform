import { Route, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses-page/courses-page.module').then(
        (m) => m.CoursesPageModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account-page/account-page.module').then(
        (m) => m.AccountPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings-page/settings-page.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./pages/lesson/lesson.module').then(
        (m) => m.LessonModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
