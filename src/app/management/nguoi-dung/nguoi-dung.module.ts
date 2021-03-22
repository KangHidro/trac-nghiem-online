import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguoiDungRoutingModule } from './nguoi-dung-routing.module';
import { ListNguoiDungComponent } from './list-nguoi-dung/list-nguoi-dung.component';
import { FormNguoiDungComponent } from './form-nguoi-dung/form-nguoi-dung.component';

@NgModule({
  declarations: [
    ListNguoiDungComponent,
    FormNguoiDungComponent,
],
  imports: [
    CommonModule,
    NguoiDungRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class NguoiDungModule { }
