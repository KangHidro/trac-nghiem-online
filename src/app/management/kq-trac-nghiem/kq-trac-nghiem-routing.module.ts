import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListKqTracNghiemComponent } from './list-kq-trac-nghiem/list-kq-trac-nghiem.component';

const routes: Routes = [
  {
    path: '',
    component: ListKqTracNghiemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KqTracNghiemRoutingModule { }
