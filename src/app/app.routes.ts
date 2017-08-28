import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'app/containers/error/error.component';

const rootRouter: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

export const RootRouter = RouterModule.forRoot(
  rootRouter, { useHash: true }
);
