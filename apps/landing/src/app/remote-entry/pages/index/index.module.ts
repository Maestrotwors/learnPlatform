import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IndexComponent, HeaderSectionComponent],
  imports: [CommonModule, IndexRoutingModule],
})
export class IndexModule {}
