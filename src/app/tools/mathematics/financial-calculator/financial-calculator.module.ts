import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialCalculatorComponent } from './financial-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
  {
    path: '',
    component: FinancialCalculatorComponent,
  }
];

@NgModule({
  declarations: [FinancialCalculatorComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FinancialCalculatorModule { }
