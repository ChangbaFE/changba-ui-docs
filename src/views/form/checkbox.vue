<template>
  <doc-page-section>
    <p>
      在一组备选项中进行多选
    </p>
    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-checkbox v-model="test1">选项1</cb-checkbox>
          <cb-checkbox v-model="test6">选项2</cb-checkbox>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-checkbox v-model="test1">选项1</cb-checkbox>
  <cb-checkbox v-model="test6">选项2</cb-checkbox>
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">禁用状态</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-checkbox v-model="test2" disabled>选项1</cb-checkbox>
          <cb-checkbox v-model="test3" disabled>选项2</cb-checkbox>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-checkbox v-model="test2" disabled>选项1</cb-checkbox>
  <cb-checkbox v-model="test3" disabled>选项2</cb-checkbox>
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">复选框组</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="垂直：">
          <cb-checkbox-group v-model="test4">
            <cb-checkbox value="1">选项1</cb-checkbox>
            <cb-checkbox value="2">选项2</cb-checkbox>
            <cb-checkbox value="3">选项3</cb-checkbox>
          </cb-checkbox-group>
        </cb-form-group>
        <cb-form-group label="水平：">
          <cb-checkbox-group v-model="test5" inline>
            <cb-checkbox value="1">选项1</cb-checkbox>
            <cb-checkbox value="2">选项2</cb-checkbox>
            <cb-checkbox value="3">选项3</cb-checkbox>
          </cb-checkbox-group>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="垂直：">
  <cb-checkbox-group v-model="test4">
    <cb-checkbox value="1">选项1</cb-checkbox>
    <cb-checkbox value="2">选项2</cb-checkbox>
    <cb-checkbox value="3">选项3</cb-checkbox>
  </cb-checkbox-group>
</cb-form-group>
<cb-form-group label="水平：">
  <cb-checkbox-group v-model="test5" inline>
    <cb-checkbox value="1">选项1</cb-checkbox>
    <cb-checkbox value="2">选项2</cb-checkbox>
    <cb-checkbox value="3">选项3</cb-checkbox>
  </cb-checkbox-group>
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">cb-checkbox 属性</h2>

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

    <h2 class="doc-page-header">cb-checkbox 事件</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="event">
        <template slot="header">
          <th>名称</th>
          <th>说明</th>
        </template>

        <template slot-scope="{ item }">
          <td>{{ item.name }}</td>
          <td>{{ item.desc }}</td>
        </template>
      </doc-table>
    </cb-box>

    <h2 class="doc-page-header">cb-checkbox-group 属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="groupProp">
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
  name: 'DemoFormCheckbox',

  data() {
    return {
      test1: false,
      test2: true,
      test3: false,
      test4: [],
      test5: [],
      test6: false,

      prop: [
        {
          name: 'v-model',
          desc: '绑定值，获取和设置内容。',
          type: 'string / number / boolean',
          value: '—',
          default: '—'
        },
        {
          name: 'value',
          desc: '复选框的 value',
          type: 'string / number / boolean',
          value: '—',
          default: '—'
        },
        {
          name: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'name',
          desc: '原生 name 属性',
          type: 'string',
          value: '—',
          default: '—'
        }
      ],

      event: [
        {
          name: 'change',
          desc: '绑定值变化时触发的事件',
          param: '选中的复选框的 value 值'
        }
      ],

      groupProp: [
        {
          name: 'v-model',
          desc: '绑定值，获取和设置内容。',
          type: 'string / number / boolean',
          value: '—',
          default: '—'
        },
        {
          name: 'inline',
          desc: '是否水平排列',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'name',
          desc: '原生 name 属性',
          type: 'string',
          value: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>
