<template>
  <div class="layout">
    <header class="header">
      <v-header></v-header>
      <v-retro-bar></v-retro-bar>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <v-retro-bar></v-retro-bar>
      <v-footer></v-footer>
      <div class="footer__banner">
        <span>
          © 2020 Тупография. Все права защищены.
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import RetroBar from "@/components/RetroBar.vue";

export default defineComponent({
  name: "App",
  components: {
    "v-header": Header,
    "v-footer": Footer,
    "v-retro-bar": RetroBar
  }
});
</script>

<style lang="scss">
@import "src/styles/base";

#app {
  font-family: Play, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: $font_size;
  color: #2c3e50;

  .layout {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;

    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      background: $header_background;
    }

    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      background: $header_background;

      .footer__banner {
        width: 100%;
        padding: 0.5rem 1rem;
        box-sizing: border-box;

        color: $font_color_prime;
        background: $footer_banner_bg;
      }
    }
  }
}
</style>
