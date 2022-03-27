import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceConvertComponent } from './force-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ForceConvertComponent,
  }
];

@NgModule({
  declarations: [ForceConvertComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ForceConvertModule { }
