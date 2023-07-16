/* ----------------------------------------------------------------------------
composables\use-store-app.ts
// ----------------------------------------------------------------------------

const storeApp = useStoreApp();

---------------------------------------------------------------------------- */

import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import type { RouteLocationNormalized } from '#vue-router';
interface State {
  state: {
    logs: string[];
  };
}

// ローディング終了までの時間
const isReadyDeray = 150;
export const useStoreApp = defineStore({
  id: 'StoreApp',
  state: (): State => {
    return {
      state: {
        logs: [],
      },
    };
  },
  getters: {},
  actions: {
    log(data: string) {
      const text = dayjs().format('mm:ss ') + ' :: ' + data;
      this.state.logs.unshift(text);
      console.log(text);
    },
    err(data: string) {
      const text = dayjs().format('mm:ss ') + ' :: ' + data;
      this.state.logs.unshift(text);
      console.error(text);
    },
  },
});
