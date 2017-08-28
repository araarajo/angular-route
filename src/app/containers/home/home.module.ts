import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Test1Component } from '../test1/test1.component';
import { Test2Component } from '../test2/test2.component';
import { Test3Component } from '../test3/test3.component';
import { HomeRouter } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    HomeRouter
  ],
  declarations: [
    HomeComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ]
})
export class HomeModule { }
