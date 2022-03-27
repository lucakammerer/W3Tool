import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingCalculatorComponent } from './programming-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProgrammingCalculatorComponent,
  }
];

@NgModule({
  declarations: [ProgrammingCalculatorComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProgrammingCalculatorModule { }
