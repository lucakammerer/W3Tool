import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesAndPrivacyPolicyComponent } from './cookies-and-privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: CookiesAndPrivacyPolicyComponent,
  }
];

@NgModule({
  declarations: [CookiesAndPrivacyPolicyComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CookiesAndPrivacyPolicyModule { }
