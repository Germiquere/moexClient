import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { isAuthennnticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    canActivate: [isAuthennnticatedGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    // TODO:ver el tema de validar segun el tipo de usuario
    path: '',
    // esto es provisorio
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
