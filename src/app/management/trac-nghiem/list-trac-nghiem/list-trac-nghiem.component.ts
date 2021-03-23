import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-list-trac-nghiem',
  templateUrl: './list-trac-nghiem.component.html',
  styleUrls: ['./list-trac-nghiem.component.scss']
})
export class ListTracNghiemComponent implements OnInit {

  constructor(
    private nzModalSvc: NzModalService,
  ) { }

  ngOnInit(): void {
  }

  openFormCreateTracNghiem(template: TemplateRef<{}>) {
    this.nzModalSvc.create({
      nzStyle: { top: '20px' },
      nzWidth: 700,
      nzTitle: 'SOẠN THẢO CÂU HỎI TRẮC NGHIỆM',
      nzContent: template,
      nzFooter: null
    });
  }

}
