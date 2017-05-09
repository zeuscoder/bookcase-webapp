<template>
  <div class="loader-wrapper" v-if="isLoading">
    <div class="loader">
      <div class='loader-center'></div>
    </div>
    <span v-if="isTip && tip">{{ tip }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      tip: {
        type: String,
        default: '载入中...',
      },
      isLoading: {
        type: Boolean,
        default: true,
      },
      isTip: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $color-1: #ECD078;
  $color-2: #C02942;
  $color-3: #542437;
  $color-4: #53777A;
  $color-text: #00a65a;

  .loader-wrapper {
    text-align: center;
    span {
      font-size: 18px;
      color: $color-text;
    }
  }

  .loader {
    position: relative;
    height: 60px;
  }

  .loader-center {
    &:before,
    &:after {
      position: absolute;
      left: 50%;
      top: 50%;

      border-radius: 50%;
      border-style: solid;
      border-top-color: $color-1;
      border-right-color: $color-2;
      border-bottom-color: $color-3;
      border-left-color: $color-4;

      content: '';

      transform: translate(-50%, -50%);
      animation: rotate 1.5s  infinite ease-in-out;
    }

    &:before { border-width: 1.5vh; }

    &:after {
      width: 6vh;
      height: 6vh;
      border-width: 1vh;
      animation-direction: reverse;
    }
  }

  @keyframes rotate {
    0% { transform: translate(-50%, -50%) rotate(0); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
</style>
