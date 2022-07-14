<template>
  <doc-page-section>
    <p>
      用于表示表单的一项内容，一般包括一个名称和一个输入项。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="名称：" help="这里是提示性文本">
          <cb-input v-model="test" />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="名称：" help="这里是提示性文本">
  <cb-input v-model="test" />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">静态文本</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="名称：" static="这里是静态文本" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="名称：" static="这里是静态文本" />
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
  name: 'DemoFormFormGroup',

  data() {
    return {
      test: '',
      prop: [
        {
          name: 'label',
          desc: '表单项的名称',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'help',
          desc: '表单项的提示性文本',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'static',
          desc: '表单项的静态文本',
          type: 'string',
          value: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>
