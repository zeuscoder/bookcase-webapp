<template>
  <div>
    <div class="box">
      <div class="box-header">
        <h3 class="box-title" v-on:click="test">只有管理员才有权限新增子账号和分配权限</h3>
      </div>
      <div class="box-body">
        <table class="table table-bordered table-striped">
          <thead>
          <tr>
            <th>序号</th>
            <th>角色</th>
            <th>状态</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(role, index) in roles">
              <td>{{ index + 1 }}</td>
              <td>{{ role.name }}</td>
              <td>{{ role.status }}</td>
              <td>{{ role.remark }}</td>
              <td>{{ role.opt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roles',
  data() {
    return {
      man: 'zeus',
      boy: 'zimou',
      roles: [
        { name: '店长', status: '禁用', remark: '管理员，可以管理所有账号', opt: '删除' },
        { name: '员工', status: '启用', remark: '只能派发优惠券，不能查看报表数据', opt: '删除' },
        { name: '财务', status: '启用', remark: '只能查看报表数据，不能派发优惠券', opt: '删除' },
      ],
    };
  },
  created() {
    console.log(this.man);
  },
  methods: {
    test: () => {
      console.log('123', '456', '123 456');
    },
  },
};
</script>
