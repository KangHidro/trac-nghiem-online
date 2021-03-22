export class CauHoiModel {
  id: string;
  cauHoi: string;
  dapAns: DapAnModel[]; // embedded
  dapAnDungId: string;
  diemSo: number;
  dapAnUserSelected?: string;
}

export class DapAnModel {
  idDapAn: string;
  noiDungDapAn: string;
}
