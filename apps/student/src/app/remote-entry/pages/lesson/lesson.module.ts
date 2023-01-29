import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonComponent } from './lesson.component';
import { LessonsMenuComponent } from './components/lessons-menu/lessons-menu.component';
import { LessonContentComponent } from './components/lesson-content/lesson-content.component';


@NgModule({
  declarations: [
    LessonComponent,
    LessonsMenuComponent,
    LessonContentComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
