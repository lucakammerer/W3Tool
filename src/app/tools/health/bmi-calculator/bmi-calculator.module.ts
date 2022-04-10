import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiCalculatorComponent } from './bmi-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: BmiCalculatorComponent,
  }
];

@NgModule({
  declarations: [BmiCalculatorComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BmiCalculatorModule { }
