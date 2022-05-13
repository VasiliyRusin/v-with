import _Vue from "vue";
import VWith from "./VWith.vue";

export default {
  install (Vue: typeof _Vue): void {
    Vue.component("VWith", VWith);
  }
};

export { VWith };
