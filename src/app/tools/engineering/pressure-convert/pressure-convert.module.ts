import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressureConvertComponent } from './pressure-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':un',
    component: PressureConvertComponent,
  },
  {
    path: '',
    component: PressureConvertComponent,
  }
];

@NgModule({
  declarations: [PressureConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PressureConvertModule { }
