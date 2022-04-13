import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthConvertComponent } from './length-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':un',
    component: LengthConvertComponent,
  },
  {
    path: '',
    component: LengthConvertComponent,
  }
];

@NgModule({
  declarations: [LengthConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class LengthConvertModule { }
