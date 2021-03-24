import { Component, OnInit } from '@angular/core';
import { UrlConstant } from 'src/app/core/constants/url.constant';
import { AuthenticateService } from 'src/app/core/services/auth/authenticate.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  routingLink = UrlConstant.ROUTE.MAIN;

  constructor(
    private authSvc: AuthenticateService,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authSvc.doLogoutUser();
  }

}
