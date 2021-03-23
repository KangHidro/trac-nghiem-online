import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CauHoiTracNghiem } from 'src/app/core/models/main/cau-hoi.model';
import { TracNghiemService } from 'src/app/core/services/main/trac-nghiem.service';

@Component({
  selector: 'app-lam-trac-nghiem',
  templateUrl: './lam-trac-nghiem.component.html',
  styleUrls: ['./lam-trac-nghiem.component.scss']
})
export class LamTracNghiemComponent implements OnInit {

  listCauHoi: CauHoiTracNghiem[] = [
    {
      id: '0',
      cauHoi: 'TESSSSSSSSSSSS',
      dapAns: [{dapAnDung: false, noiDungCauTraLoi: 'AAAA'},{dapAnDung: true, noiDungCauTraLoi: 'BBBB'}],
      diemSo: 1,
      dapAnUserSelected: ''
    },
    {
      id: '0',
      cauHoi: 'TESSSSSSSSSSSS',
      dapAns: [{dapAnDung: false, noiDungCauTraLoi: 'AAAA'},{dapAnDung: true, noiDungCauTraLoi: 'BBBB'}],
      diemSo: 1,
      dapAnUserSelected: ''
    }
  ];
  currentIndex = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private tracNghiemSvc: TracNghiemService,
  ) { }

  ngOnInit(): void {
    this.getDataCauHoiRandom();
  }

  getDataCauHoiRandom() {
    this.spinner.show();
    this.tracNghiemSvc.getRandomCauHoi(10)
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
