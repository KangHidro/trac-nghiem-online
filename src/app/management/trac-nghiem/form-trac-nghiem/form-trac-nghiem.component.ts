import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { DapAnModel } from 'src/app/core/models/main/cau-hoi.model';
import Editor from 'src/assets/libs/ckeditor5/build/ckeditor';

@Component({
  selector: 'app-form-trac-nghiem',
  templateUrl: './form-trac-nghiem.component.html',
  styleUrls: ['./form-trac-nghiem.component.scss']
})
export class FormTracNghiemComponent implements OnInit {

  form: FormGroup;
  cfgEditor = SystemConstant.CKEDITOR_CFG;
  editor = Editor;

  listDapAnTemp: DapAnModel[] = [];

  constructor(
    private fbd: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fbd.group({
      cauHoi: ['', [Validators.required]],
      dapAns: [[], [Validators.required]],
      dapAnDungId: ['', [Validators.required]],
      diemSo: [0, [Validators.required]],
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

  changeDapAnDung(index: number): void {
    this.listDapAnTemp.forEach((dapAn, i) => dapAn.dapAnDung = i === index);
  }

}
