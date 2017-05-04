<template>
  <div v-if="total > 0">
    <div class="paging-view">
      <span>共{{ total }}项&nbsp;&nbsp;&nbsp;&nbsp;{{ currentPage }} / {{ totalPage }}页</span>
      <nav class="left">
        <ul class="pagination">
          <li :class="{disabled: currentPage == 1}"><a @click="pagingOnclick(1)">&laquo;</a></li>
          <li :class="{disabled: currentPage == 1}"><a @click="pagingOnclick(currentPage - 1)">&lsaquo;</a></li>
          <li class="page" v-for="i in this.totalPage" v-if="isShow(i)" :class="{active: currentPage == i}" @click="pagingOnclick(i)"><a>{{ i }}</a></li>
          <li :class="{disabled: currentPage == totalPage}"><a @click="pagingOnclick(currentPage + 1)">&rsaquo;</a></li>
          <li :class="{disabled: currentPage == totalPage}"><a @click="pagingOnclick(totalPage)">&raquo;</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script scoped>
  export default {
    props: {
      total: {
        type: Number,
        default: 0,
      },
      pageSize: {
        type: Number,
        default: 10,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
    },
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.pageSize);
      },
    },
    methods: {
      isShow(i) {
        if (this.currentPage < 6) {
          return i <= 10;
        } else if (this.totalPage - this.currentPage < 6) {
          return i <= this.totalPage && i > this.totalPage - 10;
        }
        return i > this.currentPage - 5 && i < this.currentPage + 6;
      },
      pagingOnclick(selectPage) {
        if (selectPage < 1 || selectPage > this.totalPage) {
          return;
        }
        if (this.currentPage === selectPage) {
          return;
        }
        this.$emit('pageOnclick', selectPage);
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $paging-view--height: 80px;
  .paging-view {
    height: $paging-view--height;
    float: right;
    span { float: left; margin-right: 15px; height: $paging-view--height; line-height: $paging-view--height; }
    nav { float: left; }
  }
</style>
