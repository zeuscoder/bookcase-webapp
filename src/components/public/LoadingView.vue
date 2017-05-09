<template>
  <div class="loading" v-if="isLoading">
    <i class="fa fa-spinner fa-pulse"></i>
    <p v-if="isTip && tip">{{ tip }}</p>
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
  $loading--color: #00a65a;
  .loading {
    text-align: center;
    i {
      color: $loading--color;
    }
    p {
      font-size: 18px;
      color: $loading--color;
    }
  }
</style>
