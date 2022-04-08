import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextReverseComponent } from './text-reverse.component';

const routes: Routes = [
  {
    path: '',
    component: TextReverseComponent,
  }
];

@NgModule({
  declarations: [TextReverseComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TextReverseModule { }
