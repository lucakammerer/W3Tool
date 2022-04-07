import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64DecodingComponent } from './base64-decoding.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
  {
    path: '',
    component: Base64DecodingComponent,
  }
];

@NgModule({
  declarations: [Base64DecodingComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Base64DecodingModule { }
