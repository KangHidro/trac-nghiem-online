import { environment } from 'src/environments/environment';

export const UrlConstant = {
    API: {
      // Main
      LOGIN: environment.serverUrl + 'rest/login',

      // Catalog
      AAAAA: environment.serverUrl + 'rest/aaaaa',

    },

    ROUTE: {
        LOGIN: '/login',
        MAIN: {
            HOME: '/home',
        },
        MANAGEMENT: {
            DASHBOARD: '/management/dashboard',
    },
  }
};
