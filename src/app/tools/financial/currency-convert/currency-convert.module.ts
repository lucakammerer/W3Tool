import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConvertComponent } from './currency-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CurrencyConvertComponent,
  }
];

@NgModule({
  declarations: [CurrencyConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CurrencyConvertModule { }
