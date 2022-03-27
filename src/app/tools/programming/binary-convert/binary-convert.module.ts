import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinaryConvertComponent } from './binary-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BinaryConvertComponent,
  }
];

@NgModule({
  declarations: [BinaryConvertComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BinaryConvertModule { }
