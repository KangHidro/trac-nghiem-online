import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CauHoiModel } from '../../models/main/cau-hoi.model';
import { HandlerErrorService } from '../common/handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class CauHoiService {

  constructor(
    private http: HttpClient,
    private handleService: HandlerErrorService,
  ) { }

  getRandomCauHoi(soLuong: number): Observable<CauHoiModel[]> {
    return this.http.get<CauHoiModel[]>('')
    .pipe(catchError(this.handleService.handleError));
  }
}
