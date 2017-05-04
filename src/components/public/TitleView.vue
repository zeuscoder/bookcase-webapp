<template>
  <div class="title-view">
    <em></em>
    <span>{{ title }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        defalut: '',
        required: true,
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $title-view--border-color: #ccc;
  $title-view__em--bg-color: #39b54a;
  .title-view {
    padding-bottom: 15px;
    border-bottom: 1px solid $title-view--border-color;
    em {
      width: 4px;
      height: 25px;
      margin-right: 10px;
      display: inline-block;
      background-color: $title-view__em--bg-color;
    }
    span {
      position: relative;
      font-size: 24px;
      bottom: 4px;
    }
  }
</style>
