import { NguoiDung } from '../common/nguoi-dung.model';
import { CauHoiTracNghiem, DapAnModel } from './cau-hoi.model';

export class CauTraLoi {
  cauHoiTracNghiem: CauHoiTracNghiem;
  cauTraLoi: DapAnModel;
  traLoiDung?: boolean; // Entity + DTO
}

export class KetQuaTracNghiem {
  id: string;
  cauTraLois: CauTraLoi[];
  soCauTraLoiDung: number;
  thoiGianTraLoi: Date;
  tongDiem: number;
  user: NguoiDung;
}

export class SubmitDataCauTraLoi {
  cauTraLois: CauTraLoi[];
}
