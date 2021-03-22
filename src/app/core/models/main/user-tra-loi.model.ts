import { CauHoiModel } from "./cau-hoi.model";

export class DataUserTraLoi {
  id: string;
  idUser: string;
  cauHoiData: CauHoiModel; // embedded
  idDapAnUserTraLoi: string
}
