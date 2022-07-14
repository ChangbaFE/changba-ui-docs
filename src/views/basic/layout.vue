<template>
  <doc-page-section>
    <p>
      通过基础的 12 分栏，迅速简便地创建布局。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <div class="show-grid">
          <cb-row>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
            <cb-col span="1">md-1</cb-col>
          </cb-row>
          <cb-row>
            <cb-col span="8">md-8</cb-col>
            <cb-col span="4">md-4</cb-col>
          </cb-row>
          <cb-row>
            <cb-col span="4">md-4</cb-col>
            <cb-col span="4">md-4</cb-col>
            <cb-col span="4">md-4</cb-col>
          </cb-row>
          <cb-row>
            <cb-col span="6">md-6</cb-col>
            <cb-col span="6">md-6</cb-col>
          </cb-row>
        </div>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-row>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
  <cb-col span="1">md-1</cb-col>
</cb-row>
<cb-row>
  <cb-col span="8">md-8</cb-col>
  <cb-col span="4">md-4</cb-col>
</cb-row>
<cb-row>
  <cb-col span="4">md-4</cb-col>
  <cb-col span="4">md-4</cb-col>
  <cb-col span="4">md-4</cb-col>
</cb-row>
<cb-row>
  <cb-col span="6">md-6</cb-col>
  <cb-col span="6">md-6</cb-col>
</cb-row>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">适配移动端和桌面端</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <div class="show-grid">
          <cb-row>
            <cb-col xs="12" md="8">xs-12 md-8</cb-col>
            <cb-col xs="6" md="4">xs-6 md-4</cb-col>
          </cb-row>
          <cb-row>
            <cb-col xs="6" md="4">xs-6 md-4</cb-col>
            <cb-col xs="6" md="4">xs-6 md-4</cb-col>
            <cb-col xs="6" md="4">xs-6 md-4</cb-col>
          </cb-row>
          <cb-row>
            <cb-col xs="6">xs-6</cb-col>
            <cb-col xs="6">xs-6</cb-col>
          </cb-row>
        </div>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-row>
  <cb-col xs="12" md="8">xs-12 md-8</cb-col>
  <cb-col xs="6" md="4">xs-6 md-4</cb-col>
</cb-row>
<cb-row>
  <cb-col xs="6" md="4">xs-6 md-4</cb-col>
  <cb-col xs="6" md="4">xs-6 md-4</cb-col>
  <cb-col xs="6" md="4">xs-6 md-4</cb-col>
</cb-row>
<cb-row>
  <cb-col xs="6">xs-6</cb-col>
  <cb-col xs="6">xs-6</cb-col>
</cb-row>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">cb-col 属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="prop">
        <template slot="header">
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </template>

        <template slot-scope="{ item }">
          <td>{{ item.name }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.default }}</td>
        </template>
      </doc-table>
    </cb-box>

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoBasicLayout',

  data() {
    return {
      test1: 0,

      prop: [
        {
          name: 'span',
          desc: '栅格占据的列数，等效于 md 属性',
          type: 'number / string',
          value: '—',
          default: '12'
        },
        {
          name: 'xs',
          desc: '<768px 响应式栅格数或者栅格属性对象',
          type: 'number / string',
          value: '—',
          default: '—'
        },
        {
          name: 'sm',
          desc: '≥768px 响应式栅格数或者栅格属性对象',
          type: 'number / string',
          value: '—',
          default: '—'
        },
        {
          name: 'md',
          desc: '≥992px 响应式栅格数或者栅格属性对象',
          type: 'number / string',
          value: '—',
          default: '—'
        },
        {
          name: 'lg',
          desc: '≥1200px 响应式栅格数或者栅格属性对象',
          type: 'number / string',
          value: '—',
          default: '—'
        },
        {
          name: '更多内容',
          desc: '请参考 Bootstrap 的栅格系统文档 https://getbootstrap.com/docs/3.4/css/#grid',
          type: '—',
          value: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.show-grid {
  .cb-row {
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
  }

  .cb-col {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgb(210, 214, 222, 0.3);
    border: 1px solid #d2d6de;
  }
}
</style>
