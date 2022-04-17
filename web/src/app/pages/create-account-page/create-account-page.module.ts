import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { CreateAccountPageComponent } from './create-account-page.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';

@NgModule({
  declarations: [CreateAccountPageComponent, CreateAccountFormComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, RouterModule],
  exports: [CreateAccountPageComponent],
})
export class CreateAccountPageModule {}
