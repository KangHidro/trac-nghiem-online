export class CauHoiModel {
  id: string;
  cauHoi: string;
  dapAns: DapAnModel[]; // embedded
  dapAnDungId: string;
  diemSo: number;
}

export class DapAnModel {
  idDapAn: string;
  noiDungDapAn: string;
}
