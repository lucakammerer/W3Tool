import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaConvertComponent } from './area-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AreaConvertComponent,
  }
];

@NgModule({
  declarations: [AreaConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AreaConvertModule { }
