<template>
  <a role="button" class="btn">
    <span class="btn-inner retro-btn">
      <span class="btn-content">
        <slot></slot>
      </span>
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "RetroButton",
  emits: []
});
</script>

<style lang="scss">
@import "src/styles/variables";

.btn {
  margin: 0;
  padding: 0;

  text-align: center;
  display: inline-block;
  position: relative;

  outline: none;
  cursor: pointer;

  &::before {
    content: "";
    background-color: #0d0d0d4d;
    width: calc(100% - 2px);
    height: calc(100% - 4px);
    bottom: -8px;
    left: 1px;
    position: absolute;
    border-radius: 3px;
    z-index: -1;
  }

  &:hover {
    .btn-content {
      transform: translate3d(0, 1px, 0);
      -webkit-transform: translate3d(0, 1px, 0);
    }
    &::before {
      transform: translate3d(0, -2px, 0);
      -webkit-transform: translate3d(0, -2px, 0);
    }
    .btn-inner::before {
      transform: translate3d(0, -1px, 0);
      -webkit-transform: translate3d(0, -1px, 0);
    }
  }

  &:active {
    .btn-content {
      transform: translate3d(0, 3px, 0);
      -webkit-transform: translate3d(0, 3px, 0);
    }
    &::before {
      transform: translate3d(0, -3px, 0);
      -webkit-transform: translate3d(0, -3px, 0);
    }
    .btn-inner::before {
      transform: translate3d(0, -1px, 0);
      -webkit-transform: translate3d(0, -1px, 0);
    }
  }

  &.btn-success {
    .retro-btn {
      &::before {
        background: #00666f;
      }

      .btn-content {
        background: $retro_accent_success;

        &:hover {
          background: #169d83;
        }
      }
    }
  }

  &.btn-warning {
    .retro-btn {
      &::before {
        background: #d16900;
      }

      .btn-content {
        background: $retro_accent_warning;

        &:hover {
          background: #ffa549;
        }
      }
    }
  }

  &.btn-danger {
    .retro-btn {
      &::before {
        background: #ae0000;
      }

      .btn-content {
        background: $retro_accent_danger;

        &:hover {
          background: #ff3737;
        }
      }
    }
  }

  &.btn-info {
    .retro-btn {
      &::before {
        background: #15a1bc;
      }

      .btn-content {
        background: $retro_accent_info;

        &:hover {
          background: #69d9ef;
        }
      }
    }
  }

  .btn-inner {
    display: block;
    position: relative;
    box-sizing: border-box;
    text-transform: uppercase;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      z-index: -1;

      border-radius: 0.25rem;

      position: absolute;
      left: 0;
      bottom: -5px;
    }

    &.retro-btn {
      font-family: "Press Start 2P";
      color: $retro_button_font_color;
    }

    .btn-content {
      display: block;
      position: relative;
      padding: 0.5rem 2rem;
      border-radius: 0.25rem;
      z-index: 3;
    }
  }
}
</style>
