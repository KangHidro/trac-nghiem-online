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

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private apiUrlAdmin: string;
  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private handleErrorService: HandlerErrorService
  ) {
    this.apiUrlAdmin = UrlConstant.API.LOGIN;
    this.apiUrl = UrlConstant.API.LOGIN;
  }

  // ADMIN
  // login admin google
  doLoginAdminGoogle(token: string): Observable<ResponseItem<AuthModel>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        GoogleToken: token
      })
    };

    return this.http
      .post<ResponseItem<AuthModel>>(this.apiUrlAdmin + `/google`, null, httpOptions)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // login username/pass
  doLoginAdminForm(model): Observable<AuthModel> {
    return this.http
      .post<AuthModel>(this.apiUrlAdmin, model)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // logout
  doLogoutAdmin(): void {
    localStorage.removeItem(SystemConstant.CURRENT_ADMIN);
    localStorage.removeItem(SystemConstant.CURRENT_ADMIN_INFO);
    this.router.navigate([UrlConstant.ROUTE.LOGIN]);
  }

  // get/set localStorage email
  getTokenAdmin(): string {
    return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_ADMIN));
  }

  setTokenAdmin(email: string): void {
    localStorage.setItem(
      SystemConstant.CURRENT_ADMIN,
      JSON.stringify(email)
    );
  }

  // set/ get localStorage model Auth
  getAuthAdmin(): AuthModel {
    return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_ADMIN_INFO));
  }

  setAuthAdmin(model): void {
    localStorage.setItem(
      SystemConstant.CURRENT_ADMIN_INFO,
      JSON.stringify(model)
    );
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
      .post<ResponseItem<string>>(this.apiUrl + `/google`, null, httpOptions)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // login username/pass
  doLoginUserForm(model): Observable<AuthModel> {
    return this.http
      .post<AuthModel>(this.apiUrl, model)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // register
  doRegisterUser(model): Observable<any> {
    return this.http
      .post<any>(this.apiUrl + `/register`, model)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // logout
  doLogoutUser(): void {
    localStorage.removeItem(SystemConstant.CURRENT_USER);
    localStorage.removeItem(SystemConstant.CURRENT_USER_INFO);
    this.router.navigate([UrlConstant.ROUTE.MAIN.HOME]);
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
  getAuthUser(): AuthModel {
    return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_USER_INFO));
  }

  setAuthUser(model): void {
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
    const auth = this.getAuthAdmin();
    let role = [];
    role = auth.roles.filter(item => item === SystemConstant.ROLE.ADMIN);
    if (role && role.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  checkRoleUser(): boolean {
    const auth = this.getAuthUser();
    let role = [];
    role = auth.roles.filter(item => item === SystemConstant.ROLE.USER);
    if (role && role.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
