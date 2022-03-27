import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomCharacterComponent } from './random-character.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RandomCharacterComponent,
  }
];

@NgModule({
  declarations: [RandomCharacterComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RandomCharacterModule { }
