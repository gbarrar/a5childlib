import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildOneComponent } from './childOne/childOne.component';
import { FatherComponent } from './father.component';


const routes: Routes = [
  {
    path: 'father',
    component: FatherComponent,
    children: [
      {
        path: 'c1',
        component: ChildOneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FatherRoutingModule { }
