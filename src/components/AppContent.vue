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
        <error-page></error-page>
      </slot>
    </section>
  </div>
</template>

<script>
import ErrorPage from 'components/AppErrorPage';

export default {
  components: {
    ErrorPage,
  },
};
</script>

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
