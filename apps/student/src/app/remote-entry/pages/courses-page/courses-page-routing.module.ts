import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: CoursesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule { }
