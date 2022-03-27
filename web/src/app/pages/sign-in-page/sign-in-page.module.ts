import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { SignInPageComponent } from './sign-in-page.component';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [SignInPageComponent],
})
export class SignInPageModule {}
