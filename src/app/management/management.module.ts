import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManagementLayoutModule } from '../layouts/management/management-layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ManagementLayoutModule,
    SharedModule,
  ]
})
export class ManagementModule { }
