import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageConstant } from 'src/app/core/constants/message.constant';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { ModalData } from 'src/app/core/models/common/modal-data.model';
import { NguoiDung } from 'src/app/core/models/common/nguoi-dung.model';
import { ValidatorService } from 'src/app/core/services/common/validator.service';
import { NguoiDungService } from 'src/app/core/services/management/nguoi-dung.service';
import { customEmailValidator } from 'src/app/core/validators/email.validator';
import { MustMatch } from 'src/app/core/validators/must-match.validator';

@Component({
  selector: 'app-form-nguoi-dung',
  templateUrl: './form-nguoi-dung.component.html',
  styleUrls: ['./form-nguoi-dung.component.scss']
})
export class FormNguoiDungComponent implements OnInit {

  @Input() modalData: ModalData<NguoiDung>;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup;
  showPass = false;

  listRole = [
    {id: 'ROLE_ADMIN', value: 'Quản trị viên'},
    {id: 'ROLE_THI_SINH', value: 'Người dùng'}
  ];

  constructor(
    private fbd: FormBuilder,
    private userSvc: NguoiDungService,
    private alert: ToastrService,
    private spinner: NgxSpinnerService,
    private formValidatorSvc: ValidatorService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.patchValue();
      this.updateValidateField();
    }
  }

  createForm(): void {
    this.form = this.fbd.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, customEmailValidator]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
      roles: [null, [Validators.required]]
    });
  }

  patchValue() {
    this.form.patchValue({
      name: this.modalData.data.name || '',
      email: this.modalData.data.email || '',
      roles: this.modalData.data.roles || [],
    });
  }

  updateValidateField() {
    this.form.get('password').setValidators(null);
    this.form.get('rePassword').setValidators(null);
    this.form.get('password').updateValueAndValidity();
    this.form.get('rePassword').updateValueAndValidity();
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

  onSubmit(): void {
    console.log(this.form);
    if (this.form.valid) {
      this.spinner.show();
      if (this.modalData.action === SystemConstant.ACTION.ADD) {
        this.userSvc.createUser(this.form.value)
          .subscribe(() => {
            this.alert.success(MessageConstant.MSG_CREATE_DONE);
            this.closePopup.emit(true);
            this.spinner.hide();
          }, () => this.spinner.hide());
      } else if (this.modalData.action === SystemConstant.ACTION.EDIT) {
        this.userSvc.updateUser(this.modalData.data.id, this.form.value)
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

  onClose(): void {
    this.closePopup.emit(false);
  }

}
