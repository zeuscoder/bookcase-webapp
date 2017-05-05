<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../assets/user.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Zeus Coder</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li class="header">管理菜单</li>
        <li class="treeview">
          <a href="#"><i class="fa fa-book"></i> <span>书籍管理</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link to="/books/sale" tag="li">
              <a><i class="fa fa-link"></i> <span>已上架书籍</span></a>
            </router-link>
            <router-link to="/books/pending" tag="li">
              <a><i class="fa fa-link"></i> <span>待完善书籍</span></a>
            </router-link>
          </ul>
        </li>
        <router-link to="/articles" tag="li">
          <a><i class="fa fa-link"></i> <span>文章管理</span></a>
        </router-link>
        <router-link to="/orders" tag="li">
          <a><i class="fa fa-link"></i> <span>订单管理</span></a>
        </router-link>
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> <span>交易管理</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link to="/trades/deals" tag="li">
              <a><i class="fa fa-link"></i> <span>交易平台</span></a>
            </router-link>
            <router-link to="/trades/records" tag="li">
              <a><i class="fa fa-link"></i> <span>交易记录</span></a>
            </router-link>
          </ul>
        </li>
        <router-link to="/accounts/users" tag="li">
          <a><i class="fa fa-link"></i> <span>账号管理</span></a>
        </router-link>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>

</template>
