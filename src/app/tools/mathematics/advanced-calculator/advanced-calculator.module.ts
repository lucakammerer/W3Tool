import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedCalculatorComponent } from './advanced-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdvancedCalculatorComponent,
  }
];

@NgModule({
  declarations: [AdvancedCalculatorComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdvancedCalculatorModule { }
