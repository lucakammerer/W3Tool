import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomLetterComponent } from './random-letter.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RandomLetterComponent,
  }
];

@NgModule({
  declarations: [RandomLetterComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RandomLetterModule { }
