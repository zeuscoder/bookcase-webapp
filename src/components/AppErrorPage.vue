<template>
  <div class="error-page" style="padding-top: 15%">
    <h2 class="headline text-green"> 404</h2>
    <div class="error-content">
      <h3><i class="fa fa-warning text-green"></i> 对不起！页面又要开始捉迷藏了...</h3>
      <p>
        页面暂时旅行了，期待在下个站继续相遇，相见不如不见，再见</br>
        这时，你可以 <a @click="returnHome">返回首页</a> 或者搜索想要的页面
      </p>
      <form class="search-form">
        <div class="input-group">
          <input type="text" name="search" class="form-control" placeholder="Search">
          <div class="input-group-btn">
            <button type="submit" name="submit" class="btn btn-success btn-flat"><i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnHome() {
      this.$router.replace('/');
    },
  },
};
</script>
