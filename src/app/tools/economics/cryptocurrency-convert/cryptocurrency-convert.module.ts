import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptocurrencyConvertComponent } from './cryptocurrency-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CryptocurrencyConvertComponent,
  }
];

@NgModule({
  declarations: [CryptocurrencyConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CryptocurrencyConvertModule { }
