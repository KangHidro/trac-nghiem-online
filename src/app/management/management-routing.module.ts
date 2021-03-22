import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementLayoutComponent } from '../layouts/management/management-layout/management-layout.component';
import { NguoiDungComponent } from './nguoi-dung/nguoi-dung.component';

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
    path: 'nguoi-dung',
    component: ManagementLayoutComponent,
    children: [
      {
        path: '',
        component: NguoiDungComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
