import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToollistComponent } from './toollist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: ToollistComponent,
  }
];

@NgModule({
  declarations: [ToollistComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ToollistModule { }
