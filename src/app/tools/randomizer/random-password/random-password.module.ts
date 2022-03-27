import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPasswordComponent } from './random-password.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RandomPasswordComponent,
  }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RandomPasswordComponent],
})
export class RandomPasswordModule { }
