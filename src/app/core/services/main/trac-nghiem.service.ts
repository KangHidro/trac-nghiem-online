import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlConstant } from '../../constants/url.constant';
import { PagedResults } from '../../models/common/response-page.model';
import { CauHoiTracNghiem } from '../../models/main/cau-hoi.model';
import { HandlerErrorService } from '../common/handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class TracNghiemService {

  apiUrl = '';

  constructor(
    private http: HttpClient,
    private handleErrSvc: HandlerErrorService,
  ) {
    this.apiUrl = UrlConstant.API.TRAC_NGHIEM;
  }

  getRandomCauHoi(soLuong: number): Observable<CauHoiTracNghiem[]> {
    return this.http.get<CauHoiTracNghiem[]>('')
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  getAllCauHoiPaging(page: number, size: number, search?: string, sort?: string, column?: string): Observable<PagedResults<CauHoiTracNghiem>> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString())
    .set('search', search ? search : '')
    .set('sort', sort ? sort : 'ASC')
    .set('column', column ? column : 'cauHoi');
    return this.http.get<PagedResults<CauHoiTracNghiem>>(this.apiUrl + '/paging', {params})
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  createCauHoi(model: CauHoiTracNghiem): Observable<CauHoiTracNghiem> {
    return this.http.post<CauHoiTracNghiem>(this.apiUrl, model)
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  updateCauHoi(id: string, model: CauHoiTracNghiem): Observable<CauHoiTracNghiem> {
    return this.http.put<CauHoiTracNghiem>(this.apiUrl + `/${id}`, model)
    .pipe(catchError(this.handleErrSvc.handleError));
  }

  deleteCauHoi(id: string): Observable<CauHoiTracNghiem> {
    return this.http.delete<CauHoiTracNghiem>(this.apiUrl + `/${id}`)
    .pipe(catchError(this.handleErrSvc.handleError));
  }

}
