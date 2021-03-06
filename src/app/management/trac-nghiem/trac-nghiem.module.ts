import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracNghiemRoutingModule } from './trac-nghiem-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListTracNghiemComponent } from './list-trac-nghiem/list-trac-nghiem.component';
import { FormTracNghiemComponent } from './form-trac-nghiem/form-trac-nghiem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ListTracNghiemComponent,
  FormTracNghiemComponent,
],
  imports: [
    CommonModule,
    TracNghiemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class TracNghiemModule { }
