import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FatherComponent } from './father.component';
import { ChildOneComponent } from './childOne/childOne.component';
import { FatherRoutingModule } from './father.routhing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FatherRoutingModule
  ],
  declarations: [
    FatherComponent,
    ChildOneComponent
  ],
  exports: [
    FatherComponent,
  ]
})
export class FatherModule { }
