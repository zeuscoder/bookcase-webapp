<template>
  <div class="modal" id="confirmModal" style="padding-top:10%;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">提示</h4>
        </div>
        <div class="modal-body">
          {{ tips }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      tips: '',
      confirmAction: {},
    };
  },
  methods: {
    show(tips, confirmAction = () => {}) {
      this.tips = tips;
      this.confirmAction = confirmAction;
      $('#confirmModal').modal({
        backdrop: 'static',
        keyboard: false,
      });
    },
    confirm() {
      this.confirmAction();
    },
  },
};
</script>
