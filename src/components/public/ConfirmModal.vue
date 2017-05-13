<template>
  <div class="modal" id="confirmModal" style="padding-top:10%;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="cancel" aria-label="Close">
            <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">提示</h4>
        </div>
        <div class="modal-body">
          {{ tips }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="cancel">取消</button>
          <button type="button" class="btn btn-success" @click="confirm" :disabled="disabled">
            <i class="fa fa-spinner fa-pulse" v-if="disabled"></i>确定
          </button>
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
      ajax: false,
      disabled: false,
    };
  },
  methods: {
    show(tips, confirmAction = () => {}, ajax = false) {
      this.tips = tips;
      this.ajax = ajax;
      this.confirmAction = confirmAction;
      $('#confirmModal').modal({
        backdrop: 'static',
        keyboard: false,
      });
    },
    confirm() {
      this.disabled = this.ajax;
      this.confirmAction();
      if (!this.ajax) {
        $('#confirmModal').modal('hide');
      }
    },
    cancel() {
      this.hide();
    },
    ajaxComplete() {
      this.hide();
    },
    hide() {
      this.ajax = false;
      this.disabled = false;
      $('#confirmModal').modal('hide');
    },
  },
};
</script>
