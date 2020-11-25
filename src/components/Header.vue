<template>
  <div class="header__wrapper">
    <div class="brand">
      <a class="logo" href="/" name="Тупография">Тупография</a>
    </div>
    <nav class="nav">
      <router-link class="nav__link link link_hover-1" to="/"
        >Главная</router-link
      >
      <router-link class="nav__link link link_hover-2" to="/services"
        >Услуги</router-link
      >
      <router-link class="nav__link link link_hover-3" to="/about"
        >О нас</router-link
      >
      <router-link class="nav__link link link_hover-4" to="/contacts"
        >Контакты</router-link
      >
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: {}
});
</script>

<style lang="scss">
@import "src/styles/variables";

.header__wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  max-width: 1080px;
  padding: 1.5rem;

  color: #fff;

  .nav {
    font-size: 1.25rem;
    font-family: "Press Start 2P";

    .nav__link {
      color: inherit;
      margin: 0 1rem;
      text-decoration: none;

      &.link_hover-1:hover {
        color: $header_accent_1;
      }
      &.link_hover-2:hover {
        color: $header_accent_2;
      }
      &.link_hover-3:hover {
        color: $header_accent_3;
      }
      &.link_hover-4:hover {
        color: $header_accent_4;
      }
    }
  }
}
</style>
