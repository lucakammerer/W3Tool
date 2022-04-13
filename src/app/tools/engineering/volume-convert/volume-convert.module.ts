import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeConvertComponent } from './volume-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':un',
    component: VolumeConvertComponent,
  },
  {
    path: '',
    component: VolumeConvertComponent,
  }
];

@NgModule({
  declarations: [VolumeConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class VolumeConvertModule { }
