import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/core/services/auth/authenticate.service';

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
  ) { }

  ngOnInit(): void {
    if (this.authSvc.getTokenAdmin()) {
      this.isLoginAdmin = true;
    } else if (this.authSvc.getTokenUser()) {
      this.isLoginUser = true;
    }
  }

}
