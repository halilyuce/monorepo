import { defineStore, acceptHMRUpdate } from "pinia";
import { useStorage } from "@vueuse/core";

export const useDefaultStore = defineStore("default", {
  state: () => {
    return {
      visible: false,
      collapsed: useStorage("collapsedSide", false),
    };
  },
  getters: {},
  actions: {
    changeVisible() {
      this.visible = !this.visible;
    },
    closeDrawer() {
      if (!this.collapsed) {
        this.collapsed = true;
      }
      this.changeVisible();
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDefaultStore, import.meta.hot));
}
