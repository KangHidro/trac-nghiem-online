import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NguoiDungComponent } from './nguoi-dung/nguoi-dung.component';
import { ManagementLayoutModule } from '../layouts/management/management-layout.module';

@NgModule({
  declarations: [NguoiDungComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ManagementLayoutModule,
    SharedModule,
  ]
})
export class ManagementModule { }
