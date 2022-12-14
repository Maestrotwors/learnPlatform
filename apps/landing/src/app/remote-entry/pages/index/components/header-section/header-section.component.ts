import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'learnplatform-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSectionComponent {}
