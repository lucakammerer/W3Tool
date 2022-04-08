import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@src/app/shared.module';
import { AsciiEncodingComponent } from './ascii-encoding.component';

const routes: Routes = [
  {
    path: '',
    component: AsciiEncodingComponent,
  }
];

@NgModule({
  declarations: [AsciiEncodingComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AsciiEncodingModule { }
