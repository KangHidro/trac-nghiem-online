import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageConstant } from 'src/app/core/constants/message.constant';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { ModalData } from 'src/app/core/models/common/modal-data.model';
import { CauHoiTracNghiem, DapAnModel } from 'src/app/core/models/main/cau-hoi.model';
import { ValidatorService } from 'src/app/core/services/common/validator.service';
import { TracNghiemService } from 'src/app/core/services/main/trac-nghiem.service';
import Editor from 'src/assets/libs/ckeditor5/build/ckeditor';

@Component({
  selector: 'app-form-trac-nghiem',
  templateUrl: './form-trac-nghiem.component.html',
  styleUrls: ['./form-trac-nghiem.component.scss']
})
export class FormTracNghiemComponent implements OnInit {

  @Input() modalData: ModalData<CauHoiTracNghiem>;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup;
  editor = Editor;
  cfgEditor = SystemConstant.CkEditorCfg;

  listDapAnTemp: DapAnModel[] = [];

  constructor(
    private fbd: FormBuilder,
    private alert: ToastrService,
    private spinner: NgxSpinnerService,
    private formValidatorSvc: ValidatorService,
    private tracNghiemSvc: TracNghiemService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.patchValue();
    }
  }

  createForm(): void {
    this.form = this.fbd.group({
      cauHoi: ['', [Validators.required]],
      dapAns: [[]],
      diemSo: [0, [Validators.required]],
    });
  }

  patchValue() {
    this.listDapAnTemp = [...this.modalData.data.dapAns || []];
    this.form.patchValue({
      cauHoi: this.modalData.data.cauHoi || '',
      dapAns: this.modalData.data.dapAns || [],
      diemSo: this.modalData.data.diemSo || 0,
    });
  }

  themDapAn(): void {
    this.listDapAnTemp.push({dapAnDung: false, noiDungCauTraLoi: ''});
    this.listDapAnTemp = [...this.listDapAnTemp];
  }

  xoaDapAn(index: number): void {
    this.listDapAnTemp.splice(index, 1);
    this.listDapAnTemp = [...this.listDapAnTemp];
  }

  changeDapAnDung(index: number, checked: boolean): void {
    this.listDapAnTemp.forEach((dapAn, i) => dapAn.dapAnDung = (i === index ? checked : false));
  }

  onClose(): void {
    this.closePopup.emit(false);
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.listDapAnTemp = [...this.listDapAnTemp.filter(x => x.noiDungCauTraLoi)];
    if (this.form.valid && this.listDapAnTemp.length > 0 && this.isDaChonItNhatMotDapAnDung()) {
      this.spinner.show();
      this.form.get('dapAns').setValue(this.listDapAnTemp);
      if (this.modalData.action === SystemConstant.ACTION.ADD) {
        this.tracNghiemSvc.createCauHoi(this.form.value)
          .subscribe(() => {
            this.alert.success(MessageConstant.MSG_CREATE_DONE);
            this.closePopup.emit(true);
            this.spinner.hide();
          }, () => this.spinner.hide());
      } else if (this.modalData.action === SystemConstant.ACTION.EDIT) {
        this.tracNghiemSvc.updateCauHoi(this.modalData.data.id, this.form.value)
          .subscribe(() => {
            this.alert.success(MessageConstant.MSG_UPDATE_DONE);
            this.closePopup.emit(true);
            this.spinner.hide();
          }, () => this.spinner.hide());
      } else {
        console.log('NO ACTION');
      }
    } else {
      this.formValidatorSvc.validateAllFormFields(this.form);
    }
  }

  isDaChonItNhatMotDapAnDung(): boolean {
    return this.listDapAnTemp.filter(x => x.dapAnDung).length >= 1;
  }

  displayFieldCss(field: string): { 'has-error': boolean; 'has-feedback': boolean } {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  isFieldValid(field: string): boolean {
    return (
      !this.form.get(field).valid && this.form.get(field).touched
    );
  }

}
