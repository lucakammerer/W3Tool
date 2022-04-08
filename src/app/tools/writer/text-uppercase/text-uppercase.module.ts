import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextUppercaseComponent } from './text-uppercase.component';

const routes: Routes = [
  {
    path: '',
    component: TextUppercaseComponent,
  }
];

@NgModule({
  declarations: [TextUppercaseComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TextUppercaseModule { }
