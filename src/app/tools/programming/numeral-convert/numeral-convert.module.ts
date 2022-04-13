import { NumeralConvertComponent } from './numeral-convert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: ':un',
    component: NumeralConvertComponent,
  },
  {
    path: '',
    component: NumeralConvertComponent,
  }
];

@NgModule({
  declarations: [NumeralConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class NumeralConvertModule { }
