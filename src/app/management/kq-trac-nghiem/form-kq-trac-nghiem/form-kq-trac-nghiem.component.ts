import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalData } from 'src/app/core/models/common/modal-data.model';
import { KetQuaTracNghiem } from 'src/app/core/models/main/user-tra-loi.model';

@Component({
  selector: 'app-form-kq-trac-nghiem',
  templateUrl: './form-kq-trac-nghiem.component.html',
  styleUrls: ['./form-kq-trac-nghiem.component.scss']
})
export class FormKqTracNghiemComponent implements OnInit {

  @Input() modalData: ModalData<KetQuaTracNghiem>;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  fullDiemTong = 0;

  constructor() { }

  ngOnInit(): void {
    this.fullDiemTong = this.modalData.data.cauTraLois.reduce((sum, obj) => sum += obj.cauHoiTracNghiem.diemSo, 0);
  }

}
