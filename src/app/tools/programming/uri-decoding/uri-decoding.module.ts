import { UriDecodingComponent } from './uri-decoding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';


const routes: Routes = [
  {
    path: '',
    component: UriDecodingComponent,
  }
];

@NgModule({
  declarations: [UriDecodingComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UriDecodingModule { }
