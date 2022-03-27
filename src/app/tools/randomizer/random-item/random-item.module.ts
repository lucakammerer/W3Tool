import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomItemComponent } from './random-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RandomItemComponent,
  }
];

@NgModule({
  declarations: [RandomItemComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RandomItemModule { }
