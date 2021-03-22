import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTracNghiemComponent } from './list-trac-nghiem/list-trac-nghiem.component';

const routes: Routes = [
  {
    path: '',
    component: ListTracNghiemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracNghiemRoutingModule { }
