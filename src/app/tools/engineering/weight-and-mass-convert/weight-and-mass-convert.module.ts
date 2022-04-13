import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeightAndMassConvertComponent } from './weight-and-mass-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':un',
    component: WeightAndMassConvertComponent,
  },
  {
    path: '',
    component: WeightAndMassConvertComponent,
  }
];

@NgModule({
  declarations: [WeightAndMassConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class WeightAndMassConvertModule { }
