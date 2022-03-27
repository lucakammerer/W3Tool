import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCounterComponent } from './word-counter.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: WordCounterComponent,
  }
];

@NgModule({
  declarations: [WordCounterComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class WordCounterModule { }
