<template>
  <app-content>
    <title-view title="交易记录" slot="header"></title-view>
    <div class="box">
      <div class="box-body">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th>序号</th>
              <th>交易者A</th>
              <th>交易书籍A</th>
              <th>交易者B</th>
              <th>交易书籍B</th>
              <th>成交时间</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>交易天数</th>
              <th>交易者A留言</th>
              <th>交易者B留言</th>
              <th>交易条件</th>
              <th>备注</th>
            </tr>
            </thead>
            <tbody>
            <!--<template v-for="(book, index) in books">-->
              <!--<tr></tr>-->
            <!--</template>-->
            </tbody>
          </table>
        </div>
        <!--<page :total="total" :pageSize="queryParams.pageSize" :currentPage="currentPage" @pageOnclick="getCurrentBooks"></page>-->
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
