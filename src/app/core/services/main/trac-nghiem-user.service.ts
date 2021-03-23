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
export class TracNghiemUserService {

  apiUrl = '';

  constructor(
    private http: HttpClient,
    private handleErrSvc: HandlerErrorService,
  ) {
    this.apiUrl = UrlConstant.API.TRAC_NGHIEM;
  }

  getCauHoiUserRanDomPaging(numberOfQuiz: number): Observable<PagedResults<CauHoiTracNghiem>> {
    const params = new HttpParams()
    .set('page', '0')
    .set('size', numberOfQuiz.toString());
    return this.http.get<PagedResults<CauHoiTracNghiem>>(this.apiUrl + '/user/paging', {params})
    .pipe(catchError(this.handleErrSvc.handleError));
  }
}
