import { Component, OnInit, HostListener, TemplateRef } from '@angular/core';
import { UrlConstant } from 'src/app/core/constants/url.constant';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { AuthenticateService } from 'src/app/core/services/auth/authenticate.service';

@Component({
  selector: 'app-management-header',
  templateUrl: './management-header.component.html',
  styleUrls: ['./management-header.component.scss'],
  providers: [AuthenticateService]
})
export class ManagementHeaderComponent implements OnInit {

  constructor(
    private authSvc: AuthenticateService,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authSvc.doLogoutUser();
  }
}
