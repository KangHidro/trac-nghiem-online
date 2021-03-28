import { environment } from 'src/environments/environment';

export const UrlConstant = {
  API: {
    // Main
    LOGIN: environment.serverUrl + 'rest/login',
    TRAC_NGHIEM: environment.serverUrl + 'rest/cau-hoi-trac-nghiem',
    KET_QUA_TRAC_NGHIEM: environment.serverUrl + 'rest/ket-qua-trac-nghiem',
    NGUOI_DUNG: environment.serverUrl + 'rest/user',

  },

  ROUTE: {
    LOGIN: '/',
    MAIN: {
      QUIZ: '/main/quiz',
      PROFILE: '/main/profile',
      MY_ANSWER: '/main/my-answer',
    },
    MANAGEMENT: {
      TRAC_NGHIEM: '/management/trac-nghiem',
      NGUOI_DUNG: '/management/nguoi-dung',
    },
  }
};
