import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FatherComponent} from './modules/father/father.component';

const routes: Routes = [
  {path: 'father', component: FatherComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
