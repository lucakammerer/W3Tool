import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageConvertComponent } from './storage-convert.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: StorageConvertComponent,
  }
];

@NgModule({
  declarations: [StorageConvertComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class StorageConvertModule { }
