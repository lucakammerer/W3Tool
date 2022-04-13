import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureConvertComponent } from './temperature-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':un',
    component: TemperatureConvertComponent,
  },
  {
    path: '',
    component: TemperatureConvertComponent,
  }
];

@NgModule({
  declarations: [TemperatureConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TemperatureConvertModule { }
