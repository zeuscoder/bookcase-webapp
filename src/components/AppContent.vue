<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <slot name="header">
      </slot>
    </section>
    <!-- Main content -->
    <section class="content">
      <slot>
        <div class="error-page" style="padding-top: 15%">
          <h2 class="headline text-green"> 404</h2>
          <div class="error-content">
            <h3><i class="fa fa-warning text-green"></i> 对不起！页面又要开始捉迷藏了...</h3>
            <p>
              页面暂时旅行了，期待在下个站继续相遇，相见不如不见，再见</br>
              这时，你可以 <a href="../../index.html">返回首页</a> 或者搜索想要的页面
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
      </slot>
    </section>
  </div>
</template>

<style>
.my-default-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
