import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticateService } from 'src/app/core/services/auth/authenticate.service';

@Component({
  selector: 'app-management-sidebar',
  templateUrl: './management-sidebar.component.html',
  styleUrls: ['./management-sidebar.component.scss'],
  providers: [AuthenticateService]
})
export class ManagementSidebarComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }
}
