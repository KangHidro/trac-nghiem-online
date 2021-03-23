import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageConstant } from 'src/app/core/constants/message.constant';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { ModalData } from 'src/app/core/models/common/modal-data.model';
import { CauHoiTracNghiem } from 'src/app/core/models/main/cau-hoi.model';
import { TracNghiemService } from 'src/app/core/services/management/trac-nghiem.service';
import { Paginate } from 'src/app/shared/widget/paginate/paginate.model';

@Component({
  selector: 'app-list-trac-nghiem',
  templateUrl: './list-trac-nghiem.component.html',
  styleUrls: ['./list-trac-nghiem.component.scss']
})
export class ListTracNghiemComponent implements OnInit {

  modalData: ModalData<CauHoiTracNghiem> = new ModalData<CauHoiTracNghiem>();
  valueSearch = '';
  listCauHoi: Paginate<CauHoiTracNghiem> = new Paginate<CauHoiTracNghiem>();

  constructor(
    private nzModalSvc: NzModalService,
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private tracNghiemSvc: TracNghiemService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(): void {
    this.spinner.show();
    this.tracNghiemSvc.getAllCauHoiPaging(
      this.listCauHoi.currentPage - 1,
      this.listCauHoi.limit,
      this.valueSearch
    ).subscribe(res => {
      this.listCauHoi.data = res.content;
      this.listCauHoi.currentPage = res.pageable.pageNumber + 1;
      this.listCauHoi.limit = res.pageable.pageSize;
      this.listCauHoi.totalItem = res.totalElements;
      this.listCauHoi.totalPage = res.totalPages;
      this.spinner.hide();
    }, () => this.spinner.hide());
  }

  openFormTracNghiem(template: TemplateRef<{}>, editData?: CauHoiTracNghiem) {
    if (editData) {
      this.modalData.action = SystemConstant.ACTION.EDIT;
      this.modalData.data = editData;
    } else {
      this.modalData.action = SystemConstant.ACTION.ADD;
    }
    this.nzModalSvc.create({
      nzStyle: { top: '20px' },
      nzWidth: 700,
      nzTitle: 'SOẠN THẢO CÂU HỎI TRẮC NGHIỆM',
      nzContent: template,
      nzFooter: null
    });
  }

  pageChange(page: Paginate<CauHoiTracNghiem>): void {
    this.listCauHoi = page;
    this.getDataPaging();
  }

  closePopup(reload?: boolean) {
    this.nzModalSvc.closeAll();
    if (reload) {
      this.getDataPaging();
    }
  }

  deleteCauHoiTracNghiem(id: string) {
    this.nzModalSvc.confirm({
      nzTitle: 'Xác nhận xoá?',
      nzContent: 'Thao tác này sẽ không thể khôi phục!',
      nzCancelText: 'Huỷ',
      nzOkDanger: true,
      nzOkText: 'Xoá',
      nzOnOk: () => {
        this.spinner.show();
        this.tracNghiemSvc.deleteCauHoi(id)
        .subscribe(() => {
          this.alert.success(MessageConstant.MSG_DELETE_DONE);
          this.getDataPaging();
          this.spinner.hide();
        }, () => this.spinner.hide());
      }
    });
  }

}
