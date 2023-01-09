import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learnplatform-student-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-footer.component.html',
  styleUrls: ['./student-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentFooterComponent {

}
