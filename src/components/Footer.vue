<template>
  <div class="footer__wrapper">
    <div class="footer__description">
      <span
        >Lorem ipsum <span class="highlight">dolor</span> sit amet, consectetur
        <span class="highlight">adipiscing</span> elit, sed do eiusmod tempor
        <span class="highlight">incididunt</span> ut
        <span class="highlight">labore</span> et dolore magna aliqua.</span
      >
    </div>
    <div class="menu-list">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  components: {}
});
</script>

<style lang="scss">
@import "src/styles/variables";

.footer__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;

  width: 100%;
  max-width: 1080px;
  padding: 3rem 4rem;

  .footer__description {
    font-size: 1.5rem;
    line-height: 2.5rem;

    .highlight {
      color: $font_color_prime;
      padding: 5px;
      background: $highlight_color;
    }
  }
}
</style>
