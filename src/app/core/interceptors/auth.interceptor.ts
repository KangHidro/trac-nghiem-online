import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlConstant } from '../constants/url.constant';
import { HandlerErrorService } from '../services/common/handler-error.service';
import { AuthenticateService } from '../services/auth/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private handlerService: HandlerErrorService,
    private authenticateService: AuthenticateService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes(UrlConstant.API.LOGIN) || request.url.includes(UrlConstant.API.LOGIN)) {
      return next.handle(request);
    }
    // debugger;
    if (this.authenticateService.getAuthData() !== null) {
      return next.handle(this.addTokenUser(request)).pipe(
        catchError(
          err =>
            new Observable<HttpEvent<any>>(observer => {
              this.handlerService.convertError(err.error);
              observer.error(err);
              observer.complete();
            })
        )
      );
    } else {
      if (this.authenticateService.getAuthData() !== null) {
        return next.handle(this.addToken(request)).pipe(
          catchError(
            err =>
              new Observable<HttpEvent<any>>(observer => {
                this.handlerService.convertError(err.error);
                observer.error(err);
                observer.complete();
              })
          )
        );
      } else {
        if (this.authenticateService.getAuthData() === null) {
          return next.handle(request).pipe(
            catchError(
              err =>
                new Observable<HttpEvent<any>>(observer => {
                  this.handlerService.convertError(err.error);
                  observer.error(err);
                  observer.complete();
                })
            )
          );
        }
      }
    }
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticateService.getAuthData().token}`
      }
    });
  }

  private addTokenUser(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticateService.getAuthData().token}`
      }
    });
  }
}
