<template>
  <app-content>
    <h1 slot="header">
      书籍管理
    </h1>
    <div></div>
  </app-content>
</template>

<script>
import AppContent from 'components/AppContent';
import { fetchHome } from 'src/services/BookService';

export default {
  components: {
    AppContent,
  },
  created() {
    fetchHome()
      .then(resp => this.showMerchants(resp));
  },
  methods: {
    showMerchants(resp) {
      console.log(resp);
    },
  },

};
</script>
