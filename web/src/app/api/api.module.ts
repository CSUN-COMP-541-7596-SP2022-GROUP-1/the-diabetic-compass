import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FirebaseModule } from '../firebase/firebase.module';
import { ApiService } from './api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FirebaseModule, HttpClientModule],
  providers: [ApiService],
})
export class ApiModule {}
