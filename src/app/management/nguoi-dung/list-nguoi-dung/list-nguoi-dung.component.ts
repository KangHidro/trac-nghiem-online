import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageConstant } from 'src/app/core/constants/message.constant';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { ModalData } from 'src/app/core/models/common/modal-data.model';
import { NguoiDung } from 'src/app/core/models/common/nguoi-dung.model';
import { NguoiDungService } from 'src/app/core/services/management/nguoi-dung.service';
import { Paginate } from 'src/app/shared/widget/paginate/paginate.model';

@Component({
  selector: 'app-list-nguoi-dung',
  templateUrl: './list-nguoi-dung.component.html',
  styleUrls: ['./list-nguoi-dung.component.scss']
})
export class ListNguoiDungComponent implements OnInit {

  modalData: ModalData<NguoiDung> = new ModalData<NguoiDung>();
  valueSearch = '';
  listNguoiDung: Paginate<NguoiDung> = new Paginate<NguoiDung>();

  constructor(
    private nzModalSvc: NzModalService,
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private userSvc: NguoiDungService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(): void {
    this.spinner.show();
    this.userSvc.getAllUserPaging(
      this.listNguoiDung.currentPage - 1,
      this.listNguoiDung.limit,
      this.valueSearch
    ).subscribe(res => {
      this.listNguoiDung.data = res.content;
      this.listNguoiDung.currentPage = res.pageable.pageNumber + 1;
      this.listNguoiDung.limit = res.pageable.pageSize;
      this.listNguoiDung.totalItem = res.totalElements;
      this.listNguoiDung.totalPage = res.totalPages;
      this.spinner.hide();
    }, () => this.spinner.hide());
  }

  openFormNguoiDung(template: TemplateRef<{}>, editData?: NguoiDung) {
    if (editData) {
      this.modalData.action = SystemConstant.ACTION.EDIT;
      this.modalData.data = editData;
    } else {
      this.modalData.action = SystemConstant.ACTION.ADD;
    }
    this.nzModalSvc.create({
      nzStyle: { top: '20px' },
      nzWidth: 500,
      nzTitle: 'QUẢN LÝ NGƯỜI DÙNG',
      nzContent: template,
      nzFooter: null
    });
  }

  changeStatusNguoiDung(id: string): void {
    this.nzModalSvc.confirm({
      nzTitle: 'Xác nhận thay đổi trạng thái?',
      nzOnOk: () => {
        this.spinner.show();
        this.userSvc.changeStatusUser(id)
          .subscribe(() => {
            this.alert.success(MessageConstant.MSG_CHANGE_STATUS_DONE);
            this.spinner.hide();
            this.getDataPaging();
          }, () => this.spinner.hide());
      },
      nzCancelText: 'Không'
    });
  }

  pageChange(page: Paginate<NguoiDung>): void {
    this.listNguoiDung = page;
    this.getDataPaging();
  }

  closePopup(reload?: boolean) {
    this.nzModalSvc.closeAll();
    if (reload) {
      this.getDataPaging();
    }
  }

}
