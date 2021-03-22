import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CauHoiModel } from 'src/app/core/models/main/cau-hoi.model';
import { CauHoiService } from 'src/app/core/services/main/cau-hoi.service';

@Component({
  selector: 'app-lam-trac-nghiem',
  templateUrl: './lam-trac-nghiem.component.html',
  styleUrls: ['./lam-trac-nghiem.component.scss']
})
export class LamTracNghiemComponent implements OnInit {

  listCauHoi: CauHoiModel[] = [
    {
      id: '0',
      cauHoi: 'TESSSSSSSSSSSS',
      dapAnDungId: 'A',
      dapAns: [{idDapAn: 'A', noiDungDapAn: 'AAAA'},{idDapAn: 'B', noiDungDapAn: 'BBBB'}],
      diemSo: 1,
      dapAnUserSelected: ''
    },
    {
      id: '0',
      cauHoi: 'TESSSSSSSSSSSS',
      dapAnDungId: 'A',
      dapAns: [{idDapAn: 'A', noiDungDapAn: 'AAAA'},{idDapAn: 'B', noiDungDapAn: 'BBBB'}],
      diemSo: 1,
      dapAnUserSelected: ''
    }
  ];
  currentIndex = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private cauHoiSvc: CauHoiService,
  ) { }

  ngOnInit(): void {
    this.getDataCauHoiRandom();
  }

  getDataCauHoiRandom() {
    this.spinner.show();
    this.cauHoiSvc.getRandomCauHoi(10)
    .subscribe(res => {
      this.listCauHoi = res;
      this.spinner.hide();
    }, () => this.spinner.hide());
  }

  nextQuiz() {
    this.currentIndex += 1;
  }

  prevQuiz() {
    this.currentIndex -= 1;
  }

  submitQuiz() {

  }

}
