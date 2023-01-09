import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { NgModule } from '@angular/core';
import { RemoteEntryComponent } from './entry.component';
import { RouterModule } from '@angular/router';
import { StudentFooterComponent } from './components/student-footer/student-footer.component';
import { StudentHeaderComponent } from './components/student-header/student-header.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, MegaMenuModule, RouterModule.forChild(remoteRoutes), StudentHeaderComponent, StudentFooterComponent],
  providers: [],
})
export class RemoteEntryModule {}
