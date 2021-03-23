import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { UrlConstant } from 'src/app/core/constants/url.constant';
import { AuthenticateService } from 'src/app/core/services/auth/authenticate.service';
import { HandlerErrorService } from 'src/app/core/services/common/handler-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginUser = false;
  isLoginAdmin = false;

  constructor(
    private authSvc: AuthenticateService,
    private socialAuth: SocialAuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private handlerErrorSvc: HandlerErrorService,
  ) { }

  ngOnInit(): void {
    if (this.authSvc.getAuthData()) {
      if (this.authSvc.checkRoleAdmin()) {
        this.router.navigateByUrl(UrlConstant.ROUTE.MANAGEMENT.TRAC_NGHIEM);
      } else if (this.authSvc.checkRoleUser()) {
        this.router.navigateByUrl(UrlConstant.ROUTE.MAIN.QUIZ);
      }
    }
  }

  // login with google
  onLoginWithGoogle() {
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        if (user) {
          this.spinner.show();
          this.authSvc.doLoginUserGoogle(user.authToken).subscribe(
            (res) => {
              this.spinner.hide();
              this.authSvc.setTokenUser(user.email);
              this.authSvc.setAuthData(res);
              if (this.authSvc.checkRoleAdmin()) {
                this.router.navigateByUrl(UrlConstant.ROUTE.MANAGEMENT.TRAC_NGHIEM);
              } else if (this.authSvc.checkRoleUser()) {
                this.router.navigateByUrl(UrlConstant.ROUTE.MAIN.QUIZ);
              }
            },
            (err) => {
              this.spinner.hide();
              this.router.navigate([UrlConstant.ROUTE.LOGIN]);
              this.handlerErrorSvc.handleError(err);
            }
          );
        }
      }
    );
  }

}
