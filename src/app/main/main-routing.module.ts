import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main/main-layout/main-layout.component';
import { CauTraLoiCuaToiComponent } from './cau-tra-loi-cua-toi/cau-tra-loi-cua-toi.component';
import { LamTracNghiemComponent } from './lam-trac-nghiem/lam-trac-nghiem.component';
import { ThongTinCaNhanComponent } from './thong-tin-ca-nhan/thong-tin-ca-nhan.component';

const routes: Routes = [
  {
    path: 'quiz',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LamTracNghiemComponent
      }
    ]
  },
  {
    path: 'my-answer',
    component: CauTraLoiCuaToiComponent
  },
  {
    path: 'profile',
    component: ThongTinCaNhanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
