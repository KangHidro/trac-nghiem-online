import { environment } from 'src/environments/environment';

export const UrlConstant = {
  API: {
    // Main
    LOGIN: environment.serverUrl + 'rest/login',

  },

  ROUTE: {
    LOGIN: '/login',
    MAIN: {
      HOME: '/home',
    },
    MANAGEMENT: {
      TRAC_NGHIEM: '/management/trac-nghiem',
      NGUOI_DUNG: '/management/nguoi-dung',
    },
  }
};
