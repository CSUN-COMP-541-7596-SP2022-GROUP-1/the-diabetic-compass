import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';
import { FirebaseModule } from '../../modules/firebase/firebase.module';
import { SignInPageComponent } from './sign-in-page.component';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FirebaseModule,
  ],
  exports: [SignInPageComponent],
})
export class SignInPageModule {}
