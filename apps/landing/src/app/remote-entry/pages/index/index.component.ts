import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'learnplatform-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {}
