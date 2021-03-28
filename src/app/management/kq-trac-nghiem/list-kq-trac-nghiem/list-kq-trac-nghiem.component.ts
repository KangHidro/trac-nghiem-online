import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { ModalData } from 'src/app/core/models/common/modal-data.model';
import { KetQuaTracNghiem } from 'src/app/core/models/main/user-tra-loi.model';
import { KetQuaTracNghiemService } from 'src/app/core/services/management/ket-qua-trac-nghiem.service';
import { Paginate } from 'src/app/shared/widget/paginate/paginate.model';

@Component({
  selector: 'app-list-kq-trac-nghiem',
  templateUrl: './list-kq-trac-nghiem.component.html',
  styleUrls: ['./list-kq-trac-nghiem.component.scss']
})
export class ListKqTracNghiemComponent implements OnInit {

  modalData: ModalData<KetQuaTracNghiem> = new ModalData<KetQuaTracNghiem>();
  valueSearch = '';
  listKetQuaTracNghiem: Paginate<KetQuaTracNghiem> = new Paginate<KetQuaTracNghiem>();

  constructor(
    private nzModalSvc: NzModalService,
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private kqTracNghiemSvc: KetQuaTracNghiemService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(): void {
    this.spinner.show();
    this.kqTracNghiemSvc.getKetQuaTracNghiemPaging(
      this.listKetQuaTracNghiem.currentPage - 1,
      this.listKetQuaTracNghiem.limit,
      this.valueSearch
    ).subscribe(res => {
      this.listKetQuaTracNghiem.data = res.content;
      this.listKetQuaTracNghiem.currentPage = res.pageable.pageNumber + 1;
      this.listKetQuaTracNghiem.limit = res.pageable.pageSize;
      this.listKetQuaTracNghiem.totalItem = res.totalElements;
      this.listKetQuaTracNghiem.totalPage = res.totalPages;
      this.spinner.hide();
    }, () => this.spinner.hide());
  }

  openFormKetQua(template: TemplateRef<{}>, viewData: KetQuaTracNghiem) {
    this.modalData.data = viewData;
    this.modalData.action = SystemConstant.ACTION.VIEW;
    this.nzModalSvc.create({
      nzStyle: { top: '20px' },
      nzWidth: 700,
      nzTitle: 'XEM KẾT QUẢ',
      nzContent: template,
      nzFooter: null
    });
  }

  pageChange(page: Paginate<KetQuaTracNghiem>): void {
    this.listKetQuaTracNghiem = page;
    this.getDataPaging();
  }

  closePopup(reload?: boolean) {
    this.nzModalSvc.closeAll();
    if (reload) {
      this.getDataPaging();
    }
  }

}
