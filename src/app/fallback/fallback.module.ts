import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './fallback.component';

const routes: Routes = [
  {
    path: '',
    component: FallbackComponent,
  }
];

@NgModule({
  declarations: [FallbackComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FallbackModule { }
