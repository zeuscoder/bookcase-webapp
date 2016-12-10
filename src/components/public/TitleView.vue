<template>
  <div class="titleView">
    <em></em>
    <span>{{ title }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .titleView {
    padding-bottom: 15px;
    border-bottom: 1px solid #CCC;
  }
  .titleView em {
    display: inline-block;
    background-color: #FF8D06;
    width: 4px;
    height: 25px;
    margin-right: 10px;
  }
  .titleView span {
    font-size: 24px;
    position: relative;
    bottom: 4px;
  }
</style>
