import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SystemConstant } from '../../constants/system.constant';
import { UrlConstant } from '../../constants/url.constant';
import { UserGoogle, AuthModel } from '../../models/common/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseItem } from '../../models/common/response-data.model';
import { HandlerErrorService } from '../common/handler-error.service';
import { NguoiDung } from '../../models/common/nguoi-dung.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private loginApiUrl: string;
  private userApiUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private handleErrorService: HandlerErrorService
  ) {
    this.loginApiUrl = UrlConstant.API.LOGIN;
    this.userApiUrl = UrlConstant.API.USER;
  }

  // USER
  // login user google
  doLoginUserGoogle(token: string): Observable<ResponseItem<string>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        GoogleToken: token
      })
    };

    return this.http
      .post<ResponseItem<string>>(this.loginApiUrl + `/google`, null, httpOptions)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // login username/pass
  doLoginUserForm(model): Observable<AuthModel> {
    return this.http
      .post<AuthModel>(this.loginApiUrl, model)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // register
  doRegisterUser(model): Observable<any> {
    return this.http
      .post<any>(this.loginApiUrl + `/register`, model)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // logout
  doLogoutUser(): void {
    localStorage.removeItem(SystemConstant.CURRENT_USER);
    localStorage.removeItem(SystemConstant.CURRENT_USER_INFO);
    localStorage.removeItem(SystemConstant.CURRENT_USER_GOOGLE);
    this.router.navigate([UrlConstant.ROUTE.LOGIN]);
  }

  // get/set localStorage email
  getTokenUser(): string {
    return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_USER));
  }

  setTokenUser(email: string): void {
    localStorage.setItem(
      SystemConstant.CURRENT_USER,
      JSON.stringify(email)
    );
  }

  // set/ get localStorage model Auth
  getAuthData(): AuthModel {
    return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_USER_INFO));
  }

  setAuthData(model): void {
    localStorage.setItem(
      SystemConstant.CURRENT_USER_INFO,
      JSON.stringify(model)
    );
  }

  /**
   * Gets user google
   * @returns user google
   */
  getUserGoogle(): UserGoogle {
    return JSON.parse(
      localStorage.getItem(SystemConstant.CURRENT_USER_GOOGLE)
    );
  }

  setUserGoogle(userGoogle: UserGoogle): void {
    localStorage.setItem(
      SystemConstant.CURRENT_USER_GOOGLE,
      JSON.stringify(userGoogle)
    );
  }

  // check roles
  checkRoleAdmin(): boolean {
    const auth = this.getAuthData();
    let role = [];
    role = auth.roles.filter(item => item === SystemConstant.ROLE.ADMIN);
    if (role && role.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  checkRoleUser(): boolean {
    const auth = this.getAuthData();
    let role = [];
    role = auth.roles.filter(item => item === SystemConstant.ROLE.USER);
    if (role && role.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  getLoggedInUserInfo(): Observable<NguoiDung> {
    return this.http
    .get<NguoiDung>(this.userApiUrl + '/')
    .pipe(catchError(this.handleErrorService.handleError));
  }

  updateUserGoogleSelf(dataUser: NguoiDung): Observable<NguoiDung> {
    return this.http
    .put<NguoiDung>(this.userApiUrl + `/name`, dataUser)
    .pipe(catchError(this.handleErrorService.handleError));
  }

}
