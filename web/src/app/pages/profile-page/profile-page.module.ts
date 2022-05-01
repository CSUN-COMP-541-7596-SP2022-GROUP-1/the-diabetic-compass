import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { FirebaseModule } from '../../modules/firebase/firebase.module';
import { ApiModule } from '../../modules/api/api.module';
import { ProfilePageComponent } from './profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, ComponentsModule, FirebaseModule, ApiModule],
  exports: [ProfilePageComponent],
})
export class ProfilePageModule {}
