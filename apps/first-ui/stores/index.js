import { defineStore, acceptHMRUpdate } from "pinia";

export const useDefaultStore = defineStore("default", {
  state: () => {
    return {
      visible: false,
    };
  },
  getters: {},
  actions: {}
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDefaultStore, import.meta.hot));
}
