import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlConstant } from '../../constants/url.constant';
import { PagedResults } from '../../models/common/response-page.model';
import { KetQuaTracNghiem } from '../../models/main/user-tra-loi.model';
import { HandlerErrorService } from '../common/handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class KetQuaTracNghiemService {

  apiUrl = '';

  constructor(
    private http: HttpClient,
    private handleErrSvc: HandlerErrorService,
  ) {
    this.apiUrl = UrlConstant.API.KET_QUA_TRAC_NGHIEM;
  }

  getKetQuaTracNghiemPaging(page: number, size: number, search?: string, sort?: string, column?: string): Observable<PagedResults<KetQuaTracNghiem>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString())
    .set('search', search ? search : '')
    .set('sort', sort ? sort : 'ASC')
    .set('column', column ? column : 'email');
    return this.http.get<PagedResults<KetQuaTracNghiem>>(this.apiUrl + '/paging', {params})
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  deleteKetQuaTracNghiemById(id: string): Observable<PagedResults<KetQuaTracNghiem>> {
    return this.http.delete<PagedResults<KetQuaTracNghiem>>(this.apiUrl + `/${id}`)
    .pipe(catchError(this.handleErrSvc.handleError));
  }
}
