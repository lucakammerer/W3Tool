import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentComponent } from './percent.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PercentComponent,
  }
];

@NgModule({
  declarations: [PercentComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PercentCalculatorModule { }
