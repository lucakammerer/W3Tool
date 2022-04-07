import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerConvertComponent } from './power-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PowerConvertComponent,
  }
];

@NgModule({
  declarations: [PowerConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PowerConvertModule { }
