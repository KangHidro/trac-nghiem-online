import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { UrlConstant } from '../../constants/url.constant';
import { MessageConstant } from '../../constants/message.constant';
import { SystemConstant } from '../../constants/system.constant';
import { ResponseErrorData } from '../../models/common/response-data.model';

@Injectable({
  providedIn: 'root'
})
export class HandlerErrorService {
  routerNext = '';
  constructor(
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
    } else {
      return throwError(error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }

  parseErrorBlob(err: HttpErrorResponse): Observable<unknown> {
    const reader: FileReader = new FileReader();

    const obs = new Observable((observer: any) => {
      reader.onloadend = () => {
        observer.error(JSON.parse(reader.result as any));
        observer.complete();
      };
    });
    reader.readAsText(err.error);
    return obs;
  }

  convertError(err: ResponseErrorData): void {
    this.spinner.hide();

    if (this.getTokenUser()) {
      this.routerNext = UrlConstant.ROUTE.LOGIN;
    }

    if (err) {
      if (err.type === 'error') {
        this.toaster.warning(MessageConstant.MSG_INTERNET_REFUSE);
      } else {
        if (typeof err === 'string') {
          err = JSON.parse(err);
          if (err) {
            if (err.status === 500) {
              this.toaster.error(MessageConstant.MSG_ERR_SYSTEM);
            } else {
              this.toaster.error(err.message);
            }
          } else {
            this.toaster.warning(MessageConstant.MSG_INTERNET_REFUSE);
          }
        } else {
          if (err) {
            switch (err.status) {
              case 401:
                this.toaster.error(MessageConstant.MSG_ERROR_AUTH);
                this.doLogout();
                this.router.navigate([this.routerNext]);
                break;
              case 403:
                this.toaster.warning(MessageConstant.MSG_ERROR_AUTH);
                this.doLogout();
                this.router.navigate([this.routerNext]);
                break;
              default:
                if (err.status === 500) {
                  this.toaster.error(MessageConstant.MSG_ERR_SYSTEM);
                } else {
                  this.toaster.error(err.message);
                }
                break;
            }
          } else {
            this.toaster.warning(MessageConstant.MSG_INTERNET_REFUSE);
          }
        }
      }
    } else {
      this.toaster.warning(MessageConstant.MSG_TIMEOUT);
      this.doLogout();
      this.router.navigate([this.routerNext]);
    }
  }

  doLogout(): void {
    localStorage.clear();
  }

  getTokenUser(): string {
    return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_USER));
  }
}
