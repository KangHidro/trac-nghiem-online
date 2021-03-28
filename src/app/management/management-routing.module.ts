import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementLayoutComponent } from '../layouts/management/management-layout/management-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trac-nghiem',
    pathMatch: 'full'
  },
  {
    path: 'trac-nghiem',
    component: ManagementLayoutComponent,
    loadChildren: () => import('./trac-nghiem/trac-nghiem.module').then(m => m.TracNghiemModule)
  },
  {
    path: 'kq-trac-nghiem',
    component: ManagementLayoutComponent,
    loadChildren: () => import('./kq-trac-nghiem/kq-trac-nghiem.module').then(m => m.KqTracNghiemModule)
  },
  {
    path: 'nguoi-dung',
    component: ManagementLayoutComponent,
    loadChildren: () => import('./nguoi-dung/nguoi-dung.module').then(m => m.NguoiDungModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
