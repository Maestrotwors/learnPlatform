import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@Component({
  selector: 'learnplatform-courses-page',
  standalone: true,
  imports: [CommonModule, CoursesListComponent],
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent {}
