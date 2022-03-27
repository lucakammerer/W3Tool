import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCalculatorComponent } from './basic-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
  {
    path: '',
    component: BasicCalculatorComponent,
  }
];

@NgModule({
  declarations: [BasicCalculatorComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BasicCalculatorModule { }
