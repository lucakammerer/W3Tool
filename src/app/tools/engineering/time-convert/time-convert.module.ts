import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeConvertComponent } from './time-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TimeConvertComponent,
  }
];

@NgModule({
  declarations: [TimeConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TimeConvertModule { }
