<template>
  <doc-page-section>
    <p>
      常用于展示鼠标 hover 时的提示信息。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button v-cb-tooltip="{ placement: 'left' }" title="提示文字">左边</cb-button>
        <cb-button v-cb-tooltip title="提示文字">上边</cb-button>
        <cb-button v-cb-tooltip="{ placement: 'bottom' }" title="提示文字">下边</cb-button>
        <cb-button v-cb-tooltip="{ placement: 'right' }" title="提示文字">右边</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-button v-cb-tooltip="{ placement: 'left' }" title="提示文字">左边</cb-button>
<cb-button v-cb-tooltip title="提示文字">上边</cb-button>
<cb-button v-cb-tooltip="{ placement: 'bottom' }" title="提示文字">下边</cb-button>
<cb-button v-cb-tooltip="{ placement: 'right' }" title="提示文字">右边</cb-button>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="prop">
        <template slot="header">
          <th width="100">参数</th>
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
  name: 'DemoOtherTooltip',

  data() {
    return {
      test1: '',
      test2: '',

      prop: [
        {
          name: 'v-cb-tooltip',
          desc: '启用文字提示。可以传递 string 或 object 类型的参数，string 类型参数用于设置文字提示文案；object 用于配置 tooltip，具体参考 https://getbootstrap.com/docs/3.4/javascript/#tooltips-options',
          type: '—',
          value: '—',
          default: '—'
        },
        {
          name: 'title',
          desc: '设置问题提示的文案',
          type: 'string',
          value: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.queue {
  .btn {
    margin-right: 20px;

    &:first-child {
      margin-left: 100px;
    }
  }
}
</style>
