import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CauHoiTracNghiem } from 'src/app/core/models/main/cau-hoi.model';
import { TracNghiemUserService } from 'src/app/core/services/main/trac-nghiem-user.service';
import { Paginate } from 'src/app/shared/widget/paginate/paginate.model';

@Component({
  selector: 'app-lam-trac-nghiem',
  templateUrl: './lam-trac-nghiem.component.html',
  styleUrls: ['./lam-trac-nghiem.component.scss']
})
export class LamTracNghiemComponent implements OnInit {

  listCauHoi: Paginate<CauHoiTracNghiem> = new Paginate<CauHoiTracNghiem>();
  currentIndex = 0;
  totalQuiz = 10;

  constructor(
    private spinner: NgxSpinnerService,
    private tracNghiemUserSvc: TracNghiemUserService,
  ) { }

  ngOnInit(): void {
    this.getDataCauHoiRandom();
  }

  getDataCauHoiRandom() {
    this.spinner.show();
    this.tracNghiemUserSvc.getCauHoiUserRanDomPaging(this.totalQuiz)
    .subscribe(res => {
      this.listCauHoi.data = res.content;
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
