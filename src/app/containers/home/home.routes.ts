import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Test1Component } from '../test1/test1.component';
import { Test2Component } from '../test2/test2.component';
import { Test3Component } from '../test3/test3.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component },
    { path: 'test3', component: Test3Component }
  ]
  }
];

export const HomeRouter = RouterModule.forChild(
  homeRoutes
);
