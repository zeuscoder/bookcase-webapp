<template>
  <app-content class="lockscreen">
    <!-- 登录页面主要部分 -->
    <div class="lockscreen-wrapper">
      <div class="lockscreen-logo">
        <a><b>Book</b>case</a>
      </div>
      <div class="lockscreen-name">
        Zeus Coder
      </div>
      <div class="lockscreen-item">
        <div class="lockscreen-image">
          <img src="../../assets/user.jpg" alt="User image"/>
        </div>
        <form class="lockscreen-credentials">
          <div class="input-group">
            <input type="password" class="form-control" placeholder="password"/>
            <div class="input-group-btn">
              <button type="button" class="btn">
                <i class="fa fa-arrow-right text-muted"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="help-block text-center">
        Enter your password to retrieve your session
      </div>
    </div>
  </app-content>
</template>

<script>
  import AppContent from 'components/AppContent';
  import TitleView from 'components/public/TitleView';

  export default {
    components: {
      AppContent,
      TitleView,
    },
  };
</script>
