import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}