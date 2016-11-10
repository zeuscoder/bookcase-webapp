import VueRouter from 'vue-router';
import AccountMain from 'components/account/AccountMain';
import AccountsView from 'components/account/AccountsView';
import AccountRolesView from 'components/account/AccountRolesView';
import Books from './components/book/Books';
import Orders from './components/order/Orders';
import Articles from './components/article/Articles';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/accounts',
    },

    {
      path: '/books',
      component: Books,
    },

    {
      path: '/orders',
      component: Orders,
    },

    {
      path: '/articles',
      component: Articles,
    },

    {
      path: '/accounts',
      component: AccountMain,
      children: [
        { path: '', component: AccountsView },
        { path: 'roles', component: AccountRolesView },
      ],
    },
  ],
});

export default router;
