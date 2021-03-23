import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlConstant } from '../../constants/url.constant';
import { NguoiDung } from '../../models/common/nguoi-dung.model';
import { PagedResults } from '../../models/common/response-page.model';
import { HandlerErrorService } from '../common/handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  apiUrl = '';

  constructor(
    private http: HttpClient,
    private handleErrSvc: HandlerErrorService,
  ) {
    this.apiUrl = UrlConstant.API.NGUOI_DUNG;
  }

  getAllUserPaging(page: number, size: number, search?: string, sort?: string, column?: string): Observable<PagedResults<NguoiDung>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString())
    .set('search', search ? search : '')
    .set('sort', sort ? sort : 'ASC')
    .set('column', column ? column : 'email');
    return this.http.get<PagedResults<NguoiDung>>(this.apiUrl + '/paging', {params})
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  createUser(model: NguoiDung): Observable<PagedResults<NguoiDung>> {
    return this.http.post<PagedResults<NguoiDung>>(this.apiUrl, model)
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  updateUser(id: string, model: NguoiDung): Observable<PagedResults<NguoiDung>> {
    return this.http.put<PagedResults<NguoiDung>>(this.apiUrl + `/${id}`, model)
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  changeStatusUser(id: string): Observable<PagedResults<NguoiDung>> {
    return this.http.delete<PagedResults<NguoiDung>>(this.apiUrl + `/${id}`)
    .pipe(catchError(this.handleErrSvc.handleError));
  }
}
