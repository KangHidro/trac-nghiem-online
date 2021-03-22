import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProviders } from './interceptors';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MasterGuard } from './guards/master.guard';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { HandlerErrorService } from './services/common/handler-error.service';
import { ValidatorService } from './services/common/validator.service';
import { AuthenticateService } from './services/auth/authenticate.service';

@NgModule({
  providers: [
    HttpInterceptorProviders,
    HandlerErrorService,
    ValidatorService,
    MasterGuard,
    AdminGuard,
    UserGuard,
    AuthenticateService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  exports: [
    HttpClientModule,
    ToastrModule,
  ]
})
export class CoreModule { }
