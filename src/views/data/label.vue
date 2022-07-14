<template>
  <doc-page-section>
    <p>
      用于标记和选择。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-label>标签一</cb-label>
        <cb-label theme="primary">标签二</cb-label>
        <cb-label theme="success">标签三</cb-label>
        <cb-label theme="info">标签四</cb-label>
        <cb-label theme="warning">标签五</cb-label>
        <cb-label theme="danger">标签六</cb-label>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-label>标签一</cb-label>
<cb-label theme="primary">标签二</cb-label>
<cb-label theme="success">标签三</cb-label>
<cb-label theme="info">标签四</cb-label>
<cb-label theme="warning">标签五</cb-label>
<cb-label theme="danger">标签六</cb-label>
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
  name: 'DemoDataLabel',

  data() {
    return {
      prop: [
        {
          name: 'theme',
          desc: '风格',
          type: 'string',
          value: 'default / primary / success / info / warning / danger',
          default: 'default'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.queue {
  .cb-label + .cb-label {
    margin-left: 10px;
  }
}
</style>
