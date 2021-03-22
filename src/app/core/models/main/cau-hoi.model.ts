export class CauHoiTracNghiem {
  id: string;
  cauHoi: string;
  dapAns: DapAnModel[]; // embedded
  diemSo: number;
  dapAnUserSelected?: string;
}

export class DapAnModel {
  dapAnDung: boolean;
  noiDungCauTraLoi: string;
}
