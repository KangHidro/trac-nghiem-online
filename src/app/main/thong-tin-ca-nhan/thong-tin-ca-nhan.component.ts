import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.component.html',
  styleUrls: ['./thong-tin-ca-nhan.component.scss']
})
export class ThongTinCaNhanComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fbd: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fbd.group({
      hoTen: ['', [Validators.required]]
    });
  }

  patchValue() {

  }

  getThongTinCaNhan() {

  }

  updateThongTinCaNhan() {

  }

}
