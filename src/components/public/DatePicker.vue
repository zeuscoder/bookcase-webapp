<template>
  <input ref="input" type="text" class="form-control" :value="value" @input="updateValue($event.target.value)">
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        orientation: 'bottom',
        clearBtn: true,
      }),
    },
    value: String,
  },
  mounted() {
    this.queryInput().datepicker(this.options);
    this.queryInput().on('changeDate', this.onDateChanged);
  },
  methods: {
    onDateChanged() {
      const value = this.queryInput().datepicker('getFormattedDate');
      this.updateValue(value);
    },
    updateValue(value) {
      this.$emit('input', value);
    },
    queryInput() {
      return $(this.$refs.input);
    },
  },
};
</script>
