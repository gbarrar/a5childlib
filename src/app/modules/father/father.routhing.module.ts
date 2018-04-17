import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildOneComponent } from './childOne/childOne.component';
import { FatherComponent } from './father.component';
import {ChildTwoComponent} from './childTwo/childTwo.component';


const routes: Routes = [
  {
    path: 'father',
    component: FatherComponent,
    children: [
      {
        path: 'c1',
        component: ChildOneComponent
      },
      {
        path: 'c2',
        component: ChildTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FatherRoutingModule { }
