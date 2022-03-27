import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { CreateAccountPageComponent } from './create-account-page.component';

@NgModule({
  declarations: [CreateAccountPageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [CreateAccountPageComponent],
})
export class CreateAccountPageModule {}
