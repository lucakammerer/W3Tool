import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';



const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactModule { }
