import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergyConvertComponent } from './energy-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EnergyConvertComponent,
  }
];

@NgModule({
  declarations: [EnergyConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class EnergyConvertModule { }
