import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNguoiDungComponent } from './list-nguoi-dung/list-nguoi-dung.component';

const routes: Routes = [
  {
    path: '',
    component: ListNguoiDungComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiDungRoutingModule { }
