import { environment } from 'src/environments/environment';

export const UrlConstant = {
  API: {
    // Main
    LOGIN: environment.serverUrl + 'rest/login',

  },

  ROUTE: {
    LOGIN: '/',
    MAIN: {
      QUIZ: '/quiz',
      PROFILE: '/profile',
      MY_ANSWER: '/my-answer',
    },
    MANAGEMENT: {
      TRAC_NGHIEM: '/management/trac-nghiem',
      NGUOI_DUNG: '/management/nguoi-dung',
    },
  }
};
