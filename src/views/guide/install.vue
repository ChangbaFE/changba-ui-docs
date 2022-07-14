<template>
  <doc-page-section>
    <p>
      本节将介绍如何安装 Changba UI 组件库。
    </p>

    <section class="doc-chapter">
      <h2 class="doc-page-header">npm 安装</h2>
      <p>
        如果你的项目支持 webpack、vite 等构建工具，可以使用 npm 安装：
      </p>
      <doc-highlight language="bash">
        <textarea>
npm install --save changba-ui
        </textarea>
      </doc-highlight>
    </section>

    <section class="doc-chapter">
      <h2 class="doc-page-header">CDN 引入</h2>
      <p>
        如果你只想从最简单的 HTML 页面开始入手，可以通过 CDN 的方式引入，下面提供了一个参考示例：
      </p>
      <doc-highlight>
&lt;html>
  &lt;head>
    &lt;!-- 引入样式文件 -->
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/changba-ui@1.3/lib/theme/index.css">
  &lt;/head>

  &lt;body>
    &lt;div id="app">&lt;/div>
    &lt;!-- 引入 Vue 和 ChangbaUI 的 JS 文件 -->
    &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js">&lt;/script>
    &lt;script src="https://cdn.jsdelivr.net/npm/changba-ui@1.3/lib/changba-ui.min.js">&lt;/script>

    &lt;script>
      // 在 #app 标签下渲染一个按钮组件
      new Vue({
        el: '#app',
        template: `&lt;cb-button theme="primary">我是按钮&lt;/cb-button>`
      });

      ChangbaUI.Notify.notice('提示');
    &lt;/script>
  &lt;/body>
&lt;/html>
      </doc-highlight>
    </section>

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoGuideInstall'
}
</script>

<style lang="scss" scoped>
</style>
