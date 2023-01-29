import { Component } from '@angular/core';

@Component({
  selector: 'learnplatform-student-entry',
  template: `
    <div class="student-container">
      <div>
        <learnplatform-student-header></learnplatform-student-header>
      </div>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./student.style.scss'],
})
export class RemoteEntryComponent {}
