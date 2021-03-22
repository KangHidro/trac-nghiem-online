import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandlerErrorService } from '../services/common/handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private handlerService: HandlerErrorService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
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
