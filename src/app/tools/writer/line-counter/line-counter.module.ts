import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineCounterComponent } from './line-counter.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LineCounterComponent,
  }
];

@NgModule({
  declarations: [LineCounterComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class LineCounterModule { }
