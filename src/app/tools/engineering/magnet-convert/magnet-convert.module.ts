import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagnetConvertComponent } from './magnet-convert.component';

const routes: Routes = [
  {
    path: '',
    component: MagnetConvertComponent,
  }
];

@NgModule({
  declarations: [MagnetConvertComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MagnetConvertModule { }
