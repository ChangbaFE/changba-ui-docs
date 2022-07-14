<template>
  <doc-page-section>
    <p>
      用于颜色选择，支持多种格式。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form>
          <cb-form-group label="演示：">
            <cb-color-picker v-model="test1" />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-color-picker v-model="test1" />
</cb-form-group>
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
  name: 'DemoFormColorPicker',

  data() {
    return {
      test1: '',

      prop: [
        {
          name: 'v-model',
          desc: '绑定值。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'format',
          desc: '颜色格式',
          type: 'string',
          value: 'hex / rgb / rgba',
          default: 'hex'
        },
        {
          name: 'options',
          desc: '组件高级选项，请参考 https://itsjavi.com/bootstrap-colorpicker/v2/ 中的 Options 部分。',
          type: 'object',
          value: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>
