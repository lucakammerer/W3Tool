import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCounterComponent } from './character-counter.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CharacterCounterComponent,
  }
];

@NgModule({
  declarations: [CharacterCounterComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CharacterCounterModule { }
