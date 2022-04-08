import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsciiDecodingComponent } from './ascii-decoding.component';
import { SharedModule } from '@src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AsciiDecodingComponent,
  }
];

@NgModule({
  declarations: [AsciiDecodingComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AsciiDecodingModule { }
