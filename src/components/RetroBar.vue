<template>
  <div class="retro-bar">
    <div class="retro-bar__col col_accent-1"></div>
    <div class="retro-bar__col col_accent-2"></div>
    <div class="retro-bar__col col_accent-3"></div>
    <div class="retro-bar__col col_accent-4"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RetroBar"
});
</script>

<style lang="scss">
@import "src/styles/variables";

.retro-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .retro-bar__col {
    height: 0.5rem;
    flex: 1;
    transition: all 2s ease-out;

    &:hover {
      flex: 4;
    }

    &.col_accent-1 {
      background-color: $retro_accent_danger;
    }
    &.col_accent-2 {
      background-color: $retro_accent_warning;
    }
    &.col_accent-3 {
      background-color: $retro_accent_success;
    }
    &.col_accent-4 {
      background-color: $retro_accent_info;
    }
  }
}
</style>
