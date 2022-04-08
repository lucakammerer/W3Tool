import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextLowercaseComponent } from './text-lowercase.component';

const routes: Routes = [
  {
    path: '',
    component: TextLowercaseComponent,
  }
];

@NgModule({
  declarations: [TextLowercaseComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TextLowercaseModule { }
