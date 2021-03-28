import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageConstant } from 'src/app/core/constants/message.constant';
import { AuthenticateService } from 'src/app/core/services/auth/authenticate.service';
import { ValidatorService } from 'src/app/core/services/common/validator.service';

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.component.html',
  styleUrls: ['./thong-tin-ca-nhan.component.scss']
})
export class ThongTinCaNhanComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fbd: FormBuilder,
    private authSvc: AuthenticateService,
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private validatorSvc: ValidatorService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fbd.group({
      name: ['', [Validators.required]]
    });
    this.patchValue();
  }

  patchValue() {
    this.spinner.show();
    this.authSvc.getLoggedInUserInfo()
    .subscribe(res => {
      this.form.patchValue({
        name: res.name || ''
      });
      this.spinner.hide();
    }, () => this.spinner.hide());
  }

  updateThongTinCaNhan() {
    if (this.form.valid) {
      this.spinner.show();
      this.authSvc.updateUserGoogleSelf(this.form.value)
      .subscribe(() => {
        this.spinner.hide();
        this.alert.success(MessageConstant.MSG_UPDATE_DONE);
      }, () => this.spinner.hide());
    } else {
      this.validatorSvc.validateAllFormFields(this.form);
    }
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
