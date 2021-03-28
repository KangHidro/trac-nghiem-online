import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KqTracNghiemRoutingModule } from './kq-trac-nghiem-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListKqTracNghiemComponent } from './list-kq-trac-nghiem/list-kq-trac-nghiem.component';
import { FormKqTracNghiemComponent } from './form-kq-trac-nghiem/form-kq-trac-nghiem.component';

@NgModule({
  declarations: [
    ListKqTracNghiemComponent,
    FormKqTracNghiemComponent,
  ],
  imports: [
    CommonModule,
    KqTracNghiemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class KqTracNghiemModule { }
