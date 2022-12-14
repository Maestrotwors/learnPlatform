import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule],
})
export class IndexModule {}
