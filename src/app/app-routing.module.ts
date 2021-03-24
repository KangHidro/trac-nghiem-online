import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstant } from './core/constants/url.constant';
import { AdminGuard } from './core/guards/admin.guard';
import { MasterGuard } from './core/guards/master.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import(`./main/main.module`).then(m => m.MainModule),
    canActivate: [MasterGuard],
    data: {
      guards: [UserGuard, AdminGuard],
      guardsRelation: 'OR',
      fallbackUrl: UrlConstant.ROUTE.LOGIN
    }
  },
  {
    path: 'management',
    loadChildren: () => import(`./management/management.module`).then(m => m.ManagementModule),
    canActivate: [MasterGuard],
    data: {
      guards: [AdminGuard],
      guardsRelation: 'OR',
      fallbackUrl: UrlConstant.ROUTE.LOGIN
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
