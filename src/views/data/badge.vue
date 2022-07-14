<template>
  <doc-page-section>
    <p>
      出现在按钮、图标旁的数字或状态标记。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <a href="javascript:;">收件箱 <cb-badge>42</cb-badge></a>
        <cb-button>消息 <cb-badge>4</cb-badge></cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<a href="#">收件箱 <cb-badge>42</cb-badge></a>
<cb-button>消息 <cb-badge>4</cb-badge></cb-button>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">不同颜色</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <a href="javascript:;">颜色一 <cb-badge theme="light-blue">1</cb-badge></a>
        <a href="javascript:;">颜色二 <cb-badge theme="green">2</cb-badge></a>
        <a href="javascript:;">颜色三 <cb-badge theme="yellow">3</cb-badge></a>
        <a href="javascript:;">颜色四 <cb-badge theme="red">4</cb-badge></a>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<a href="#">颜色一 <cb-badge theme="light-blue">1</cb-badge></a>
<a href="#">颜色二 <cb-badge theme="green">2</cb-badge></a>
<a href="#">颜色三 <cb-badge theme="yellow">3</cb-badge></a>
<a href="#">颜色四 <cb-badge theme="red">4</cb-badge></a>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">属性</h2>

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
  name: 'DemoDataBadge',

  data() {
    return {
      prop: [
        {
          name: 'theme',
          desc: '风格',
          type: 'string',
          value: '参考颜色文档',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.queue {
  a,
  .cb-button {
    margin-right: 10px;
  }
}
</style>
