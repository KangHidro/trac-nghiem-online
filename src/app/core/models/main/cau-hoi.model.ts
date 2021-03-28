export class CauHoiTracNghiem {
  id?: string; // Entity
  cauHoi: string; // Entity + DTO
  dapAns: DapAnModel[]; // embedded  // Entity + DTO
  diemSo: number;  // Entity + DTO
  dapAnUserSelected?: string; // local
}

export class DapAnModel {
  dapAnDung?: boolean; // Entity
  noiDungCauTraLoi: string; // Entity + DTO
}
