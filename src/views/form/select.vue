<template>
  <doc-page-section>
    <p>
      下拉选择框
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-select v-model="test1">
            <option value="1">选项1</option>
            <option value="2">选项2</option>
            <option value="3">选项3</option>
          </cb-select>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-select v-model="test1">
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </cb-select>
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">禁用状态</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-select v-model="test2" disabled>
            <option value="1">选项1</option>
            <option value="2">选项2</option>
            <option value="3">选项3</option>
          </cb-select>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-select v-model="test2" disabled>
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </cb-select>
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">基础多选</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-select-plus v-model="test3" multiple>
            <option value="1">选项1</option>
            <option value="2">选项2</option>
            <option value="3">选项3</option>
          </cb-select-plus>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-select-plus v-model="test3" multiple>
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </cb-select-plus>
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

    <h2 class="doc-page-header">cb-select-plus 属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="selectPlusProp">
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
  name: 'DemoFormSelect',

  data() {
    return {
      test1: '1',
      test2: '1',
      test3: [],

      prop: [
        {
          name: 'v-model',
          desc: '绑定值',
          type: 'string / number',
          value: '—',
          default: '—'
        },
        {
          name: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ],

      selectPlusProp: [
        {
          name: 'multiple',
          desc: '是否多选',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'width',
          desc: '组件宽度，单位像素',
          type: 'number / string',
          value: '—',
          default: '—'
        },
        {
          name: 'options',
          desc: '下拉框的内容，也可以直接使用 <option> 来定义下拉框的选项。',
          type: 'array',
          value: '—',
          default: '—'
        },
        {
          name: 'config',
          desc: 'select-plus 的其他选项，具体内容请参考 select2 类库的文档: https://select2.org/configuration/options-api',
          type: 'object',
          value: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>
