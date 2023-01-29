import { RouterModule, Routes } from '@angular/router';

import { LessonComponent } from './lesson.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: ':courseId/:lessonId', component: LessonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
