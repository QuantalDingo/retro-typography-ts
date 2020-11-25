import { Directive } from "vue";

export const Danger: Directive<HTMLElement> = {
  beforeMount(el) {
    console.log(el.classList.add("btn-danger"));
  }
};

export default {
  danger: Danger
};
