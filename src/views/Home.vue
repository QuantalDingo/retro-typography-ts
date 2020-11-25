<template>
  <div class="home">
    <br />
    <br />
    <v-button class="btn-success">success</v-button>
    <br />
    <br />
    <v-button v-danger>danger</v-button>
    <br />
    <br />
    <v-button class="btn-warning">warning</v-button>
    <br />
    <br />
    <v-button class="btn-info">info</v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import RetroButton from "@/components/RetroButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    "v-button": RetroButton
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.home {
}
</style>
