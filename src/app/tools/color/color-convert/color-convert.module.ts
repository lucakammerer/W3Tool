import { ColorConvertComponent } from './color-convert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: ':un',
    component: ColorConvertComponent,
  },
  {
    path: '',
    component: ColorConvertComponent,
  }
];

@NgModule({
  declarations: [ColorConvertComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ColorConvertModule { }
