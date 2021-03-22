import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainLayoutModule } from '../layouts/main/main-layout.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { ThongTinCaNhanComponent } from './thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { LamTracNghiemComponent } from './lam-trac-nghiem/lam-trac-nghiem.component';
import { CauTraLoiCuaToiComponent } from './cau-tra-loi-cua-toi/cau-tra-loi-cua-toi.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ThongTinCaNhanComponent,
    LamTracNghiemComponent,
    CauTraLoiCuaToiComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainLayoutModule,
    MainRoutingModule,
    AuthModule,
    SharedModule,
  ]
})
export class MainModule { }
