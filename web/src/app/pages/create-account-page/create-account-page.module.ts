import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { CreateAccountPageComponent } from './create-account-page.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { FirebaseModule } from 'src/app/modules/firebase/firebase.module';
import { ApiModule } from 'src/app/modules/api/api.module';
import { NgxBootstrapModule } from 'src/app/modules/ngx-bootstrap/ngx-bootstrap.module';

@NgModule({
  declarations: [CreateAccountPageComponent, CreateAccountFormComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule,
    ApiModule,
    FirebaseModule,
    NgxBootstrapModule,
  ],
  exports: [CreateAccountPageComponent],
})
export class CreateAccountPageModule {}
