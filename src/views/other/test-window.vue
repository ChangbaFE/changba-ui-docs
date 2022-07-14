<template>
  <p>测试对话框内容</p>
</template>

<script>
export default {
  data() {
    return {
      dialogOptions: {
        title: '测试对话框标题'
      }
    }
  },

  methods: {
    async dialogClickButton(button) {
      if (button === 'ok') {
        console.log('对话框内: 确认按钮');

        return true;
      }
    }
  }
}
</script>
