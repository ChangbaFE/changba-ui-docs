<template>
  <doc-page-section>
    <p>
      本节将介绍如何在项目中使用 ChangbaUI 组件库。
    </p>
    <section class="doc-chapter">
      <h2 class="doc-page-header">全局引入</h2>
      <p>
        如果你的项目支持 webpack、vite 等构建工具，可以使用 npm 安装：
      </p>
      <doc-highlight language="javascript">
import Vue from 'vue'
import ChangbaUI from 'changba-ui'

import 'changba-ui/lib/theme/index.css'

Vue.use(ChangbaUI)
      </doc-highlight>
    </section>
    <section class="doc-chapter">
      <h2 class="doc-page-header">浏览器支持</h2>
      <p>
        现代浏览器和 Internet Explorer 10+
      </p>
    </section>
    <section class="doc-chapter">
      <h2 class="doc-page-header">开源协议</h2>
      <p>
        本项目基于 MIT 协议，请自由地享受和参与开源。
      </p>
    </section>
  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoGuideQuickStart'
}
</script>

<style lang="scss" scoped>
</style>
