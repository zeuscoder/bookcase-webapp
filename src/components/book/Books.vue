<template>
  <app-content>
    <h1 slot="header">
      书籍管理
    </h1>
    <br>
    <form class="form-horizontal">
      <div class="row">
        <div class="col-md-3 form-group">
          <label class="col-md-4 control-label" for="title">图书标题:</label>
          <div class="col-md-8">
            <input class="form-control" id="title" placeholder="图书标题" v-model.trim="params.title">
          </div>
        </div>
        <div class="col-md-3 form-group">
          <label class="col-md-4 control-label" for="authors">图书作者:</label>
          <div class="col-md-8">
            <input class="form-control" id="authors" placeholder="图书作者" v-model.trim="params.authors">
          </div>
        </div>
        <div class="col-md-3 form-group">
          <label class="col-md-4 control-label" for="isbn">ISBN:</label>
          <div class="col-md-8">
            <input class="form-control" id="isbn" placeholder="ISBN" v-model.trim="params.isbn">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 form-group">
          <label class="col-md-4 control-label" for="category">图书类型:</label>
          <div class="col-md-8">
            <select class="form-control" id="category" v-model.number="params.category">
              <option :value="0">全部</option>
              <option v-for="category in categories" :value="category.categoryId">{{ category.categoryName }}</option>
            </select>
          </div>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-md-2 col-md-offset-7">
          <a class="btn btn-block btn-primary" @click="queryParams">查询</a>
        </div>
        <div class="col-md-2">
          <a class="btn btn-block btn-primary" @click="resetParams">清空</a>
        </div>
      </div>
    </form>
    <br>
    <div class="box">
      <div class="box-body">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th>序号</th>
              <th>书名</th>
              <th>作者</th>
              <th>ISBN</th>
              <th>价格</th>
              <th>数量</th>
              <th>出版社</th>
              <th>出版日期</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
              <template v-for="(book, index) in books">
                <tr>
                  <td>{{ index + 1 }}</td>
                  <td>{{ book.title }}</td>
                  <td>{{ book.authors }}</td>
                  <td>{{ book.isbn }}</td>
                  <td>{{ book.price }}</td>
                  <td>{{ book.number }}</td>
                  <td>{{ book.publisher }}</td>
                  <td>{{ book.publishDate }}</td>
                  <td>
                    <a href="javascript:void(0)" @click="showDetail(index)">详情</a>
                  </td>
                </tr>
                <tr v-show="index == isDetailShownIndex" style="background-color: #ccc">
                  <td colspan="8" class="form-horizontal" style="text-align: left;">
                    <div class="row">
                      123
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <page :total="total" :pageSize="params.pageSize" :currentPage="currentPage" @pageOnclick="getCurrentBooks"></page>
        </div>
      </div>
  </app-content>
</template>

<script>
import AppContent from 'components/AppContent';
import Page from 'components/public/Page';
import { fetchBooks, fetchBookCategories } from 'src/services/BookService';

export default {
  components: {
    AppContent,
    Page,
  },
  data() {
    return {
      books: [],
      params: {
        title: '',
        authors: '',
        isbn: '',
        category: 0,
        page: 1,
        pageSize: 10,
      },
      categories: [],
      isDetailShownIndex: -1,
      total: 0,
      currentPage: 1,
    };
  },
  created() {
    this.initQueryParams();
    this.getCategories();
    this.getBooks(this.params.page);
  },
  methods: {
    initQueryParams() {
      const queryParams = this.$route.query;
      if (queryParams.page && queryParams.pageSize) {
        queryParams.page = parseInt(queryParams.page, 10);
        queryParams.pageSize = parseInt(queryParams.pageSize, 10);
        queryParams.category = parseInt(queryParams.category, 10);
        this.params = { ...queryParams };
      }
    },
    getCategories() {
      fetchBookCategories().then((resp) => {
        if (resp.result === 0) {
          this.categories = resp.data;
          console.log(this.categories);
        }
      });
    },
    getBooks(page) {
      this.isDetailShownIndex = -1;
      this.params.page = page;
      fetchBooks(this.params).then((resp) => {
        if (resp.result === 0) {
          this.books = resp.data;
          this.total = resp.total;
          this.currentPage = page;
          this.$router.replace({ path: '/books', query: { ...this.params } });
        }
      });
    },
    getCurrentBooks(page) {
      this.getBooks(page);
    },
    queryParams() {
      this.getBooks(1);
    },
    resetParams() {
      this.params.title = '';
      this.params.authors = '';
      this.params.isbn = '';
      this.params.category = 0;
    },
    showDetail(index) {
      if (index === this.isDetailShownIndex) {
        this.isDetailShownIndex = -1;
        return;
      }
      this.isDetailShownIndex = index;
    },
  },

};
</script>

<style scoped>
  .table th,
  .table td {
    text-align: center;
    height: 38px;
  }
  a {
    position: relative;
    margin-right: 10px;
  }
  .vertical-center {
    height: 34px;
    line-height: 34px;
  }
</style>>
