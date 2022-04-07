import { Base64EncodingComponent } from './base64-encoding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';


const routes: Routes = [
  {
    path: '',
    component: Base64EncodingComponent,
  }
];

@NgModule({
  declarations: [Base64EncodingComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Base64EncodingModule { }
