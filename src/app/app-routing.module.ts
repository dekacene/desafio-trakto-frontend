import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./features/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: 'u',
    loadChildren: () =>
      import('./features/user-area/user-area.module').then(
        (m) => m.UserAreaModule
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
