import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CauHoiTracNghiem } from '../../models/main/cau-hoi.model';
import { HandlerErrorService } from '../common/handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class CauHoiService {

  constructor(
    private http: HttpClient,
    private handleService: HandlerErrorService,
  ) { }

  getRandomCauHoi(soLuong: number): Observable<CauHoiTracNghiem[]> {
    return this.http.get<CauHoiTracNghiem[]>('')
    .pipe(catchError(this.handleService.handleError));
  }
}
