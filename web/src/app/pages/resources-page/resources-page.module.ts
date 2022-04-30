import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { ResourcesPageComponent } from './resources-page.component';

@NgModule({
  declarations: [ResourcesPageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [ResourcesPageComponent],
})
export class ResourcesPageModule {}
