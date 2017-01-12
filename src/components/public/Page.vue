<template>
  <div style="height:79px" v-if="total > 0">
    <div class="pull-right">
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

<style scoped>
  .pull-right {
    height: 79px;
  }
  .pull-right span {
    float: left;
    height: 79px;
    line-height: 79px;
    margin-right: 15px;
  }
  .pull-right nav {
    float: left;
  }
  a {
    cursor: pointer;
  }
</style>
